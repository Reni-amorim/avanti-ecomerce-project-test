document.addEventListener('DOMContentLoaded', function() {
    // Function to handle responsive product display
    const handleResponsiveProducts = function() {
        const productGrids = document.querySelectorAll('.product-grid');
        
        productGrids.forEach(grid => {
            const productCards = grid.querySelectorAll('.product-card');
            
            // Show all products by default
            productCards.forEach(card => {
                card.style.display = '';
            });
            
            // If on mobile view, hide products beyond the second one
            if (window.innerWidth <= 768) {
                productCards.forEach((card, index) => {
                    if (index >= 2) {
                        card.style.display = 'none';
                    }
                });
            }
        });
    };
    
    // Run on page load
    handleResponsiveProducts();
    
    // Run when window is resized
    window.addEventListener('resize', handleResponsiveProducts);
});