import prompt from 'prompt-sync';
const scanner = prompt();

// Components
import { SelectPlayer } from './players/selectPlayer.js';
import { getCircuit } from './getCircuit/getCircuit.js';
import { Race } from './race/race.js';

export async function Game() {
    let play = true;

    while (play) {
        const PlayerOne = await SelectPlayer(scanner);
        const PlayerTwo = await SelectPlayer(scanner);

        const Circuit = await getCircuit(scanner);

        await Race(PlayerOne, PlayerTwo, Circuit, scanner);

        console.log("\nDeseja jogar novamente?");
        console.log("1 - Sim");
        console.log("0 - Não");

        const response = scanner("Escolha: ").trim();

        if (response === "1") {
            console.clear();
        } else {
            play = false;
        }
    }
}

Game();