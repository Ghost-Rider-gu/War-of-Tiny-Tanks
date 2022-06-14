window.addEventListener('load', prepareCanvas);

function prepareCanvas() {
    const mainScreen = document.getElementById('main-screen');
    const canvasContext = mainScreen.getContext('2d');
    mainScreen.width = 500;
    mainScreen.height = 500; 
}