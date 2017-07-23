import Fighter from "./Fighter";
import ImprovedFighter from "./ImprovedFighter";

export default class Fight {
/*    fighter: Fighter;
    fighter2: ImprovedFighter;

    constructor(fighter: Fighter, fighter2: ImprovedFighter) {
        this.fighter = fighter;
        this.fighter2 = fighter2;
    }*/

    fight(fighter: Fighter, fighter2: ImprovedFighter, point: number[]): void {
        console.log('---- Game has begun ----');

        for (var i = 0; i < point.length; i++) {
            if(fighter.health <= 0 || fighter2.health <= 0) {
                console.log('---- Game over! ---- ');
                fighter.health > 0 ? console.log(`${fighter.name} is Winner!`) :
                    console.log(`${fighter2.name} is Winner!`);
                break;
            }

            fighter.hit(fighter2, point[i]);
            fighter2.hit(fighter, point[i]);

        }

        if(i == point.length && fighter.health > 0 && fighter2.health > 0) {
            console.log("They still alive! Give them more damage :)")
        }

    }
}