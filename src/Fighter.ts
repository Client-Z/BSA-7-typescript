export interface IFighter {
    readonly name: string;
    power: number;
    health: number;

    setDamage(damage: number): void;
    hit(enemy: Fighter, point: number): void;
}

export default class Fighter implements IFighter {
    readonly name: string;
    power: number;
    health: any;

    constructor(name: string, power: number, health: number) {
        this.name = name;
        this.power = power;
        this.health = health    ;
    }

    setDamage(damage: number){
        this.health -= damage;
        // для требования (воспользоваться приведением типов)
        let health: string = (<string>this.health);

        console.log(`${this.name} has ${health} health`);
    }

    hit(enemy: IFighter, point: number){
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
}