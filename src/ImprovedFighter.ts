import Fighter, { IFighter } from './Fighter';

export interface IimprovedFighter extends IFighter {
    doubleHit(enemy: Fighter, point: number);
}

export default class ImprovedFighter extends Fighter implements IimprovedFighter{

     doubleHit(enemy: Fighter, point: number) {
        return super.hit(enemy, point * 2);
    }
}