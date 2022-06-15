import { InputHandler } from './InputHandler.js';
import { Player } from './Player.js';

export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.player = new Player(this);
        this.input = new InputHandler();
    }

    update() {
        this.player.update(this.input.key);
    }

    draw(context) {
        this.player.draw(context);
    }
}