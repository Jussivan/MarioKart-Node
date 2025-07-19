import { Player } from "./player.js";

export function SelectPlayer(scanner) {
    const playerName = scanner('Digite seu nickname: ');
    console.log(
        `${playerName} escolha 1 dos personagens a seguir:
        M - Mário
        P - Peach
        L - Luigi
        Y - Yoshi
        B - Bowser
        K - Donkey Kong\n`
    );
    const selection = scanner('Digite a letra do personagem: ').toUpperCase();
    
    console.clear();

    if(selection === 'M') {
        return new Player(playerName,"Mario", 4, 3, 3);
    } else if(selection === 'P') {
        return new Player(playerName,"Peach", 3, 4, 2);
    } else if(selection === 'L') {
        return new Player(playerName,"Luigi", 3, 4, 4);
    } else if(selection === 'Y') {
        return new Player(playerName,"Yoshi", 3, 4, 3);
    } else if(selection === 'B') {
        return new Player(playerName,"Bowser", 5, 2, 5);
    } else if(selection === 'K') {
        return new Player(playerName,"Donkey Kong", 2, 2, 5);
    } else {
        console.log("Opção inválida! Selecionando Mário por padrão.");
        return new Player(playerName,"Mario", 10, 8, 7);
    }
}