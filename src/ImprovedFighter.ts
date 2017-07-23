import Fighter from './Fighter';

export default class ImprovedFighter extends Fighter {

    protected doubleHit(enemy: Fighter, point: number) {
        return super.hit(enemy, point * 2);
    }
}