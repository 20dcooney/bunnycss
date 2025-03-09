//import "./styles/bunnycss.css"

document.addEventListener('DOMContentLoaded', function () { 
    fetch('./svg/bunny-one.svg')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bunny-three').innerHTML = data;
        })
        .catch(error => console.error('Error loading SVG:', error));
});