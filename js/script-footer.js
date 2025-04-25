document.addEventListener('DOMContentLoaded', function() {
    // Only add toggle functionality if screen width is 768px or less
    const checkWidth = function() {
        const footerHeadings = document.querySelectorAll('.footer-column h4');
        const footerLists = document.querySelectorAll('.footer-list');
        const toggleTexts = document.querySelectorAll('.toggle-text');
        
        if (window.innerWidth <= 768) {
            // Remove any previously attached event listeners
            footerHeadings.forEach(heading => {
                heading.removeEventListener('click', handleClick);
                heading.addEventListener('click', handleClick);
            });
            
            // Initially hide all lists (important: set height to 0px explicitly)
            footerLists.forEach(list => {
                list.style.maxHeight = '0px';
            });
            
            // Show toggle text and set to +
            toggleTexts.forEach(text => {
                text.style.display = 'inline-block';
                text.textContent = '+';
            });
        } else {
            // Show all lists at larger screens
            footerLists.forEach(list => {
                list.style.maxHeight = 'none';
            });
            
            // Hide toggle text
            toggleTexts.forEach(text => {
                text.style.display = 'none';
            });
            
            // Remove event listeners for larger screens
            footerHeadings.forEach(heading => {
                heading.removeEventListener('click', handleClick);
            });
        }
    };
    
    // Click handler function
    function handleClick() {
        // Toggle active class on the column itself (not just h4)
        this.parentElement.classList.toggle('active');
        
        // Toggle + and - text
        const toggleText = this.querySelector('.toggle-text');
        
        if (this.parentElement.classList.contains('active')) {
            toggleText.textContent = '-';
            // Expand the list
            const list = this.nextElementSibling;
            list.style.maxHeight = list.scrollHeight + 'px';
            list.style.visibility = 'visible';
        } else {
            toggleText.textContent = '+';
            // Collapse the list
            const list = this.nextElementSibling;
            list.style.maxHeight = '0';
            list.style.visibility = 'hidden';
        }
    }
    
    // Run on page load
    checkWidth();
    
    // Run when window is resized
    window.addEventListener('resize', checkWidth);
});