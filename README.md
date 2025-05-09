# avanti-ecomerce-project-test


Avanti e-commerce project test

Initial project, the entire interface is ready, only the functionalities are missing.


fix: UI adjustments for website components
- Fix icon positioning for discount and new elements
- Update image URLs for banners and product sections
- Adjust background colors in showcase section
- Fix image paths in features section
- Standardize payment method icons in footer (size and paths)

Contact Section:
Added background image banner to the contact section
Improved contact message display with blue background and white text
Newsletter Section:
Restructured by moving the h3 heading outside the form
Resized the form for better responsiveness
Added styling for the newsletter span with blue text highlight
Product Description:
Adjusted CSS to center content
Improved spacing and alignment for better readability
Features Section:
Centered content and adjusted layout
Changed background color to light grey
Added map-pin icons in feature elements
Footer:
Centered footer text for improved alignment
Enhanced responsive design to convert institutional links into a menu on smaller screens
Improved spacing between footer elements


Implemented responsive navigation for mobile view. Added hamburger menu toggle, repositioned search bar below header on mobile screens, and created collapsible vertical navigation menu that appears when toggled. Maintained desktop layout while optimizing for mobile devices with a cleaner, more accessible interface.

Adjust and resize products-section - Stack price elements vertically with original price above current price, position discount badge to the right, and optimize overall section sizing for better visual hierarchy
feat: Add outside pagination arrows to product sections
 - Repositioned product controls to be positioned absolutely within the product section
 - Styled arrows to appear at the left and right edges of the section
 - Added hover effects and transitions for better user experience
 - Ensured responsive behavior across different screen sizes

limit product display to 2 items on mobile view

- Add responsive-products.js to handle dynamic product visibility
- Script ensures only first 2 products are visible on screens <= 768px
- Works alongside existing CSS selectors for consistent cross-browser behavior
- Content visibility updates automatically on window resize

fix: align footer accordion text left and toggle icons right

  Add dropdown menu functionality to navigation
    This commit implements dropdown menus for the main navigation:

    - Added CSS for dropdown menu styling with proper transitions
    - Created JavaScript to handle dropdown toggling behavior
    - Implemented responsive design for different screen sizes
    - Added console logging for debugging purposes

    The dropdown system provides:
    - Multi-column category layouts
    - Department-specific dropdown menus
    - Promotional banner areas in dropdowns
    - Mobile-friendly collapsible navigation

Fix dropdown banner image positioning
- Changed banner-content class to banner-content-dropdown
- Added z-index to banner-content-dropdown to properly layer elements

Integrate responsive media queries for improved mobile experience
- Combined responsive styles at 992px breakpoint for newsletter form
- Added dropdown menu width and column layout adjustments
- Implemented accordion-style layout for dropdowns on mobile (768px)
- Fixed banner display behavior across different screen sizes
- Maintained consistent styling for form inputs on smaller screens


Improve dropdown banner appearance and dimensions
- Add brightness filter to make dropdown banner image darker (brightness 0.5)
- Increase opacity of banner content background for better contrast
- Resize banner button with proper padding and border styling
- Adjust dropdown menu dimensions for better proportions
- Update button text styling with bold font and proper spacing

Add search dropdown display
- Created floating dropdown below search bars
- Shows you search this word: [query] on Enter
- Works for desktop and mobile
- Auto-closes when clicking outside

Remove pagination script

feat: integrate Nunito font family
