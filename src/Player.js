export class Player {
    constructor(game) {
        this.game = game;

        this.width = 164;
        this.height = 126;

        this.x = 0;
        this.y = this.game.height - this.height;

        this.image = document.getElementById('player');

        this.speed = 0;
        this.maxSpeed = 5;
    }

    update(input) {
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
    }

    draw(context) {
        context.drawImage(this.image,
            0,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height);
    }
}