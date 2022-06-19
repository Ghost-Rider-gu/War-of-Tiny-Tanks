import { InputHandler } from './InputHandler.js';
import { Player } from './Player.js';
import { Background } from './Background.js';

export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.groundMargin = 50;
        this.speedParallax = 3;
        this.background = new Background(this);
        this.player = new Player(this);
        this.input = new InputHandler();
    }

    update(deltaTime) {
        this.background.update();
        this.player.update(this.input.key, deltaTime);
    }

    draw(context) {
        this.background.draw(context);
        this.player.draw(context);
    }
}