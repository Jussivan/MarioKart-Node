export class Player {
    constructor(playerName, character, speed, control, power) {
        this.playerName = playerName;
        this.character = character;
        this.speed = speed;
        this.control = control;
        this.power = power;
        this.points = 0;
    }

    RollDice(atribute) {
        let Dice = Math.floor(Math.random() * 6) + 1;
        let result;
        if('Turn' == atribute) {
            result = this.control + Dice;
            console.log(`${this.playerName} tem ${this.control} de ${atribute} + ${Dice} do Dado = ${result}.`)
        } else if('Straight' == atribute) {
            result = this.speed + Dice;
            console.log(`${this.playerName} tem ${this.speed} de ${atribute} + ${Dice} do Dado = ${result}.`)
        } else if('Duel' == atribute) {
            result = this.power + Dice;
            console.log(`${this.playerName} tem ${this.power} de ${atribute} + ${Dice} do Dado = ${result}.`)
        }
        return result;
    }

    addPoint(point) {
        this.points+=point;
        console.log(`${this.playerName} ganhou +${point} pontos.`)
    }
}