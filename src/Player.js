export class Player {
    constructor(game) {
        this.game = game;

        this.width = 164;
        this.height = 126;

        this.x = 0;
        this.y = this.game.height - this.height;

        this.image = document.getElementById('player');

        this.speed = 0;
    }

    update(input) {
        if (input === 'ArrowRight') {
            this.x++;
        } else if (input === 'ArrowLeft') {
            this.x--;
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