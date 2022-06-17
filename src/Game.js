import { InputHandler } from './InputHandler.js';
import { Player } from './Player.js';

export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.groundMargin = 50;
        this.player = new Player(this);
        this.input = new InputHandler();
    }

    update(deltaTime) {
        this.player.update(this.input.key, deltaTime);
    }

    draw(context) {
        this.player.draw(context);
    }
}