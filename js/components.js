// Function to load external components (header, nav, footer)
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(componentId).innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load header, navigation, and footer into the pages
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "/pages/components/header.html");
    loadComponent("nav-container", "/pages/components/navigation.html");
    loadComponent("footer-container", "/pages/components/footer.html");
});