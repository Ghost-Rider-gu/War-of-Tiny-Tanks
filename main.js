import { Game } from './src/Game.js';

window.addEventListener('load', initGame);

function initGame() {
    const mainScreen = document.getElementById('main-screen');
    const canvasContext = mainScreen.getContext('2d');
    mainScreen.width = 500;
    mainScreen.height = 500;
    
    const game = new Game(mainScreen.width, mainScreen.height);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        canvasContext.clearRect(0, 0, mainScreen.width, mainScreen.height);
        game.update(deltaTime);
        game.draw(canvasContext);
        requestAnimationFrame(animate);
    }

    animate(0);
}