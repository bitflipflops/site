// Get all `<a>` elements
const anchorTagElements = document.getElementsByTagName('a');

[ ...anchorTagElements ].forEach(anchor => {
    anchor.addEventListener('mouseover', event => {
        // Get the target href from the element.
        // i.e. "/tip/hover-preloading" from <a href="/tip/hover-preloading">
        const href = event.target.href;

        // Create a new <link rel="prefetch" href="/tip/hover-preloading"> element
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    });
});

// Handle desktop scenario
button.addEventListener('mouseover', () => {
    preloadData();
});

// Handle mobile scenario
button.addEventListener('touchstart', () => {
    preloadData();
});
