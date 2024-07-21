document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu for mobile view
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    // Smooth scrolling for navigation links
    const navItems = document.querySelectorAll('.nav-links li a');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            // Close the navigation menu on mobile after clicking a link
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }

            // Get the href attribute of the clicked link
            const targetHref = item.getAttribute('href');

            // Wait for a short time before navigating to give the animation time to play out
            setTimeout(function() {
                window.location.href = targetHref; // Navigate to the target page
            }, 300); // Adjust this delay as needed for your animation duration
        });
    });

    // Example data for Case Studies and Resources
    const caseStudies = [
        {
            title: 'Case Study 1: Optimization in Injection Molding',
            description: 'Detailed analysis of optimizing production planning in injection molding processes.'
        },
        {
            title: 'Case Study 2: Innovations in Extrusion Techniques',
            description: 'Exploration of innovative production planning strategies for extrusion techniques.'
        }
    ];

    const resources = [
        {
            title: 'Plastic Manufacturing: A Comprehensive Guide',
            link: 'https://example.com/plastic-manufacturing-guide'
        },
        {
            title: 'Advanced CAD/CAM Techniques in Manufacturing',
            link: 'https://example.com/advanced-cad-cam-techniques'
        }
    ];

    // Example of localStorage usage
    const localStorageKey = 'visitedPages';
    let visitedPages = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    visitedPages.push(window.location.pathname);
    localStorage.setItem(localStorageKey, JSON.stringify(visitedPages));

    // Conditional branching example based on viewport width
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    if (isMobile) {
        console.log('Mobile view');
    } else {
        console.log('Desktop view');
    }

    // Function to dynamically display case studies
    function displayCaseStudies() {
        const caseStudiesContainer = document.querySelector('.case-studies');
    
        // Check if caseStudiesContainer exists and is not null
        if (caseStudiesContainer) {
            caseStudies.forEach(study => {
                const studyElement = document.createElement('div');
                studyElement.classList.add('case-study');
    
                const title = `<h2>${study.title}</h2>`;
                const description = `<p>${study.description}</p>`;
    
                studyElement.innerHTML = title + description;
                caseStudiesContainer.appendChild(studyElement);
            });
        } else {
            console.error('Case studies container not found or is null.');
        }
    }
    
    // Function call to display case studies (example of organizing functions)
    displayCaseStudies();

});
