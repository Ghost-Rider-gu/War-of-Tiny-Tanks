import { State } from "./PlayerState.js";
import { States } from "./EnumStates.js";

export class MovingState extends State {
    constructor(player) {
        super('MOVING');
        this.player = player;
    }

    enter() {
        this.player.frameX = 0;
    }

    handleInput(input) {
        if (input === 'ArrowRight' || input === 'ArrowLeft') {
            this.player.setState(States.MOVING);
        }
    }
}