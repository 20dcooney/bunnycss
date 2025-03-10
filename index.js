//import "./styles/bunnycss.css"

document.addEventListener('DOMContentLoaded', function () { 
    fetch('./svg/bunny-one.svg')
        .then(response => response.text())
        .then(data => {
            const svgContainer = new DOMParser().parseFromString(data, 'image/svg+xml');

            const paths = svgContainer.querySelectorAll('path');
            paths.forEach(path => {
                path.classList.add('colorhandling');
            });

            const svgElements = document.querySelectorAll('.bunny-one');

            svgElements.forEach(element => {
                element.innerHTML = '';
                const svgElement = svgContainer.querySelector('svg').cloneNode(true);
                element.appendChild(svgElement);
            });
        })
        .catch(error => console.error('Error loading SVG:', error));
});