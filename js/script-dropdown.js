document.addEventListener('DOMContentLoaded', function() {
    console.log('Dropdown script loaded');
    
    // Get all dropdown elements
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    console.log('Found dropdown items:', dropdownItems.length);
    
    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Toggle dropdown when clicking on the trigger
    dropdownItems.forEach(item => {
        const trigger = item.querySelector('a');
        
        if (trigger) {
            // Remove any existing click event listeners to prevent duplicates
            trigger.removeEventListener('click', handleDropdownClick);
            
            // Add the click event listener
            trigger.addEventListener('click', handleDropdownClick);
            
            function handleDropdownClick(e) {
                console.log('Dropdown clicked:', trigger.textContent.trim());
                e.preventDefault();
                e.stopPropagation();
                
                // Check if this dropdown is already active
                const isActive = item.classList.contains('active');
                
                // Close all dropdowns first
                closeAllDropdowns();
                
                // If this dropdown wasn't active before, open it
                if (!isActive) {
                    item.classList.add('active');
                    console.log('Dropdown activated:', trigger.textContent.trim());
                }
            }
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown')) {
            closeAllDropdowns();
        }
    });
    
    // Close dropdowns when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });
    
    // Add a class to the body to indicate JS is loaded
    document.body.classList.add('dropdown-js-loaded');
    
    console.log('Dropdown script initialization complete');
});