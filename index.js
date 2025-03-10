document.addEventListener('DOMContentLoaded', function () { 
    function loadSvg(classSvgMap) {
        for (const className in classSvgMap) {
            const svgPaths = classSvgMap[className];

            svgPaths.forEach(svgPath => {
                fetch(svgPath)
                    .then(response => response.text())
                    .then(data => {
                        const svgContainer = new DOMParser().parseFromString(data, 'image/svg+xml');

                        const paths = svgContainer.querySelectorAll('path');
                        paths.forEach(path => {
                            path.classList.add('colorhandling');
                        });

                        const svgElements = document.querySelectorAll(`.${className}`);

                        svgElements.forEach(element => {
                            element.innerHTML = '';

                            const svgElement = svgContainer.querySelector('svg').cloneNode(true);
                            element.appendChild(svgElement);

                            if (element.classList.contains('pink')) {
                                svgElement.style.color = 'pink';
                            }
                            if (element.classList.contains('green')) {
                                svgElement.style.color = 'green';
                            }
                            if (element.classList.contains('blue')) {
                                svgElement.style.color = 'blue';
                            }

                            if (element.classList.contains('small')) {
                                svgElement.style.width = '50px';
                                svgElement.style.height = '50px';
                            }
                            if (element.classList.contains('medium')) {
                                svgElement.style.width = '100px';
                                svgElement.style.height = '100px';
                            }
                            if (element.classList.contains('large')) {
                                svgElement.style.width = '200px';
                                svgElement.style.height = '200px';
                            }
                             
                            const colorMatch = Array.from(element.classList).find(className => /custom-color-(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})/.test(className));

                            if (colorMatch) {
                            
                                const hexColor = colorMatch.match(/custom-color-(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})/)[1];
                                svgElement.style.color = hexColor; 
                            }

                        });

                        
                    })
                    .catch(error => console.error(`Error loading SVG from ${svgPath} for ${className}:`, error));
            });
        }
    }

    function searchAndLoadSvg() {
        const classSVGMap = {
            'bunny-one': ['./svg/bunny-one.svg'],
        };
        const classNamesToSearch = ['bunny-one']; 

        classNamesToSearch.forEach(className => {
            const elements = document.querySelectorAll(`.${className}`);
            if (elements.length > 0) {
                loadSvg({ [className]: classSVGMap[className] });
            }
        });
    }
    searchAndLoadSvg();


    /*function loadCustomColors() {
        const customColorElements = document.querySelectorAll('[class^="custom-color-"]');

        customColorElements.forEach(customColorElement => {

        const colorExtract = customColorElement.className.match(/custom-color-(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})/);

        if (colorExtract) {
            const hexColor = colorExtract[1];
            customColorElement.style.color = hexColor;
        }  
        });
    }

    loadCustomColors();*/

})

    

    //REMINDER: New SVGs will need to be added to classSVGMap and classNamesToSearch in order to be searched for.