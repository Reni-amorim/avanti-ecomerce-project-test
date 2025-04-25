document.addEventListener('DOMContentLoaded', function() {
    // Get references to both desktop and mobile search inputs and containers
    const desktopSearchInput = document.querySelector('.top-header .search-bar input');
    const mobileSearchInput = document.querySelector('.mobile-search-bar .search-bar input');
    const desktopSearchBar = document.querySelector('.top-header .search-bar');
    const mobileSearchBar = document.querySelector('.mobile-search-bar .search-bar');
    
    // Function to create and setup search dropdown
    function setupSearchDropdown(searchInput, searchBar) {
        if (!searchInput || !searchBar) return;
        
        // Make the parent container position relative to contain the dropdown
        searchBar.style.position = 'relative';
        
        // Create the dropdown element
        const dropdown = document.createElement('div');
        dropdown.className = 'search-dropdown';
        dropdown.style.cssText = `
            display: none;
            position: absolute;
            width: 100%;
            background: white;
            border: 1px solid var(--medium-gray);
            border-top: none;
            border-radius: 0 0 5px 5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            top: 100%;
            left: 0;
            padding: 10px;
            max-height: 200px;
            overflow-y: auto;
        `;
        
        // Append the dropdown to the search bar
        searchBar.appendChild(dropdown);
        
        // Handle search input events
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchQuery = searchInput.value.trim();
                if (searchQuery) {
                    // Display the search result in the dropdown
                    dropdown.innerHTML = `<div class="search-result">you search this word: "${searchQuery}"</div>`;
                    dropdown.style.display = 'block';
                    
                    // Style the search result
                    const searchResult = dropdown.querySelector('.search-result');
                    if (searchResult) {
                        searchResult.style.cssText = `
                            padding: 8px 10px;
                            color: var(--dark-gray);
                            font-size: 14px;
                            cursor: default;
                        `;
                    }
                    
                    e.preventDefault(); // Prevent form submission
                } else {
                    dropdown.style.display = 'none';
                }
            }
        });
        
        // Hide dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!searchBar.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });
        
        // Hide dropdown when input is cleared
        searchInput.addEventListener('input', function() {
            if (searchInput.value.trim() === '') {
                dropdown.style.display = 'none';
            }
        });
        
        // Focus the input to show dropdown again if there's content
        searchInput.addEventListener('focus', function() {
            if (searchInput.value.trim() !== '') {
                dropdown.style.display = 'block';
            }
        });
    }
    
    // Initialize search handling for both search inputs
    setupSearchDropdown(desktopSearchInput, desktopSearchBar);
    setupSearchDropdown(mobileSearchInput, mobileSearchBar);
});