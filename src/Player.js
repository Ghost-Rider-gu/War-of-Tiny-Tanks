import { MovingState } from "./States/MovingState.js";
import { StandingState } from "./States/StandingState.js";

export class Player {
    constructor(game) {
        this.game = game;

        this.width = 164;
        this.height = 126;

        this.x = 0;
        this.y = this.game.height - this.height - this.game.groundMargin;

        this.frameX = 0;
        this.maxFrame = 7;

        this.tankSprite = document.getElementById('player');
        this.tankBarrelSprite = document.getElementById('tank_barrel');
        this.tankPlateSprite = document.getElementById('tank_yellow_plates');

        this.speed = 0;
        this.maxSpeed = 5;

        this.fps = 20;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;

        this.states = [new StandingState(this), new MovingState(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
    }

    update(input, deltaTime) {
        this.currentState.handleInput(input);
        this.x += this.speed;
        if (input === 'ArrowRight') {
            this.speed = this.maxSpeed;
        } else if (input === 'ArrowLeft') {
            this.speed = -this.maxSpeed;
        } else {
            this.speed = 0;
        }

        // checking boundaries
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.game.width - this.width) {
            this.x = this.game.width - this.width;
        }

        // animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) {
                this.frameX++;
            } else {
                this.frameX = 0;
            }
        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw(context) {
        context.drawImage(this.tankBarrelSprite,
            0,
            0,
            144,
            34,
            this.x + 70,
            this.y + (this.height / 6),
            144,
            34);
        context.drawImage(this.tankSprite,
            this.frameX * this.width,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height);
        context.drawImage(this.tankPlateSprite,
            0,
            0,
            40,
            28,
            this.x + 70,
            this.y + (this.height / 6),
            40,
            28);
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}