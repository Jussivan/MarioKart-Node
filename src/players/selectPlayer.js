import { Player } from "./player.js";

export async function SelectPlayer(prompt) {
    const playerName = prompt('Digite seu nickname: ');
    console.log(
        `${playerName} escolha 1 dos personagens a seguir:
        M - Mário
        P - Peach
        L - Luigi
        Y - Yoshi
        B - Bowser
        K - Donkey Kong\n`
    );
    const selection = prompt('Digite a letra do personagem: ').toUpperCase();
    
    console.clear();

    if(selection === 'M') {
        return new Player(playerName,"Mario", 10, 8, 7);
    } else if(selection === 'P') {
        return new Player(playerName,"Peach", 7, 10, 6);
    } else if(selection === 'L') {
        return new Player(playerName,"Luigi", 9, 7, 8);
    } else if(selection === 'Y') {
        return new Player(playerName,"Yoshi", 8, 9, 5);
    } else if(selection === 'B') {
        return new Player(playerName,"Bowser", 5, 6, 10);
    } else if(selection === 'K') {
        return new Player(playerName,"Donkey Kong", 6, 5, 9);
    } else {
        console.log("Opção inválida! Selecionando Mário por padrão.");
        return new Player(playerName,"Mario", 10, 8, 7);
    }
}