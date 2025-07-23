document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const colorButtons = document.querySelectorAll('.color-btn'); 
    const body = document.body;

    // --- Function to set the theme ---
    const setTheme = (themeName) => {
        // Remove all existing theme classes
        body.classList.remove('dark-theme', 'blue-theme', 'green-theme');
        
        // Add the new theme class if it's not 'default'
        if (themeName !== 'default') {
            body.classList.add(`${themeName}-theme`);
        }
        
        // Save the theme preference to Local Storage
        localStorage.setItem('selectedTheme', themeName);
    };

    // --- Load saved theme on page load ---
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        setTheme(savedTheme);
        // Update the 'Toggle Theme' button text based on saved theme (optional)
        if (savedTheme === 'dark') {
            themeToggleBtn.textContent = 'Switch to Light Mode';
        } else {
            themeToggleBtn.textContent = 'Toggle Theme'; // Or specific for blue/green
        }
    } else {
        // Default to light theme if no theme is saved
        setTheme('default');
    }

    // --- Event Listener for the main theme toggle button ---
    themeToggleBtn.addEventListener('click', () => {
        // Toggle between 'default' (light) and 'dark' themes
        if (body.classList.contains('dark-theme')) {
            setTheme('default');
            themeToggleBtn.textContent = 'Switch to Dark Mode'; // Corrected text
        } else {
            setTheme('dark');
            themeToggleBtn.textContent = 'Switch to Light Mode'; // Corrected text
        }
    });

    // --- Event Listeners for color selection buttons ---
    colorButtons.forEach(button => {
        button.addEventListener('click', (event) => { // 'event' is defined here
            const color = event.target.dataset.color; // Get the data-color attribute
            setTheme(color); // Apply the selected color theme
            // Optionally reset the main toggle button text if specific color is chosen
            themeToggleBtn.textContent = 'Toggle Theme'; 
        });
    });
});