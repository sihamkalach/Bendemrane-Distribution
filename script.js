document.getElementById('menuButton').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the document
    var hiddenMenu = document.getElementById('hiddenMenu');
    var logo = document.getElementById('nav');
    hiddenMenu.classList.toggle('show');
    logo.classList.toggle('hide-nav');
});

document.addEventListener('click', function(event) {
    var hiddenMenu = document.getElementById('hiddenMenu');
    var logo = document.getElementById('nav');
    var isClickInsideMenu = hiddenMenu.contains(event.target);
    var isClickOnMenuButton = document.getElementById('menuButton').contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
        hiddenMenu.classList.remove('show');
        logo.classList.remove('hide-nav');
    }
});
//main section 
    document.addEventListener('DOMContentLoaded', function() {
        const toggleLink = document.getElementById('toggleLink');
        const mainSection = document.getElementById('mainSection');
        const hideSection = document.getElementById('hideSection');
        const toggleLink2 = document.getElementById('toggleLink2');
        const toggleLink3 = document.getElementById('toggleLink3');

        // Afficher la section principale et le lien "View less"
        toggleLink.addEventListener('click', function(event) {
            event.preventDefault();
            mainSection.style.display = 'block'; // Afficher la section principale
        });
        toggleLink3.addEventListener('click', function(event) {
            event.preventDefault();
            mainSection.style.display = 'block'; // Afficher la section principale
        });
        // Cacher la section principale et le lien "View less"
        toggleLink2.addEventListener('click', function(event) {
            event.preventDefault();
            mainSection.style.display = 'none';
        });

    });
