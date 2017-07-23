import IFighter from "./Fighter";
import { IimprovedFighter } from "./ImprovedFighter";

export default class Fight {

    fight(fighter: IFighter, fighter2: IimprovedFighter, point: number[]): void {
        console.log('---- Game has begun ----');

        for (let i = 0; i < point.length; i++) {
            if(fighter.health <= 0 || fighter2.health <= 0) {
                console.log('---- Game over! ---- ');
                fighter.health <= 0 ? console.log(`${fighter2.name} is Winner!`):
                    console.log(`${fighter.name} is Winner!`);
                break;
            }

            //fighter.health > 0 ? fighter.hit(fighter2, point[i]) : console.log(`${fighter2.name} is Winner!`);

            fighter.hit(fighter2, point[i]);
            fighter2.health > 0 ? fighter2.doubleHit(fighter, point[i]) : console.log(`${fighter.name} is Winner!`);

            if( (i == point.length - 1) && fighter.health > 0 && fighter2.health > 0) {
                console.log("They still alive! Give them more damage :)")
            }
        }

    }
}