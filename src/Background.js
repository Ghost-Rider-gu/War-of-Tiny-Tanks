export class Background {
    constructor(game) {
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.backgroundImage = document.getElementById('background');
        this.firstLayer = new Layer(this.game,
            this.width,
            this.height,
            1,
            this.backgroundImage);
        this.layers = [this.firstLayer];
    }

    update() {
        this.layers.forEach(layer => {
            layer.update();
        });
    }

    draw(context) {
        this.layers.forEach(layer => {
            layer.draw(context);
        });
    }
}

class Layer {
    constructor(game,
        width,
        height, 
        speedModifier,
        image) {
            this.game = game;
            this.width = width;
            this.height = height;
            this.speedModifier = speedModifier;
            this.image = image;
            this.x = 0;
            this.y = 0;
    }

    update() {
        if (this.x < -this.width) {
            this.x = 0;
        } else {
            this.x -= this.game.speed * this.speedModifier;
        }
    }

    draw(context) {
        context.drawImage(this.image,
            this.x,
            this.y,
            this.width,
            this.height);
    }
}