import { State } from "./PlayerState.js";
import { States } from "./EnumStates.js";

export class StandingState extends State {
    constructor(player) {
        super('STANDING');
        this.player = player;
    }

    enter() {
        this.player.frameX = 0;
    }

    handleInput(input) {
        if (input === 'Release ArrowRight' || input === 'Release ArrowLeft') {
            this.player.setState(States.STANDING);
        }
    }
}