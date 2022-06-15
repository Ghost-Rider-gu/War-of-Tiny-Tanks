export class InputHandler {
    constructor() {
        this.key = '';
        window.addEventListener('keydown', e => {
            switch(e.key) {
                case 'ArrowRight':
                    this.key = 'ArrowRight';
                    break;
                case 'ArrowLeft':
                    this.key = 'ArrowLeft';
                    break;
                default:
                    this.key = '';
            }
        });
        window.addEventListener('keyup', e => {
            switch(e.key) {
                case 'ArrowRight':
                    this.key = 'Release ArrowRight';
                    break;
                case 'ArrowLeft':
                    this.key = 'Release ArrowLeft';
                    break;
                default:
                    this.key = '';
            }
        });
    }
}