import Fight from "./src/Fight";
import Fighter from "./src/Fighter";
import ImprovedFighter from "./src/ImprovedFighter";

let fighter = new Fighter('Robin', 5, 100);
let improvedFighter = new ImprovedFighter('Batman', 7, 100);

let place = new Fight();

place.fight(fighter, improvedFighter, [5, 5, 10]);