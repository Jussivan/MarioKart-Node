export function Race(p1, p2, circuit, scanner) {
    for (let lap = 0; lap < circuit.length; lap++) {
        console.log(`🚥 Rodada ${lap + 1}`);
        console.log(`A pista sorteada foi: ${circuit[lap].toUpperCase()}\n`);

        RaceConfront(p1, p2, circuit[lap]);
        Placar(p1, p2, lap);

        scanner("\nPressione ENTER para ir para a próxima rodada...");
        console.clear();
    }


    function RaceConfront(p1, p2, atribute) {
        let resultadoP1 = p1.RollDice(atribute);
        let resultadoP2 = p2.RollDice(atribute);

        if(resultadoP1>resultadoP2) {
            p1.addPoint(1);
        } else if(resultadoP2>resultadoP1) {
            p2.addPoint(1);
        } else {
            console.log("Jogadores empataram, ninguém pontua.");
        }
    }

    function Placar(p1, p2, lap) {
        console.log(`\nPlacar ${lap+1}° rodada:\n${p1.character} (${p1.playerName}): ${p1.points} pontos.\n${p2.character} (${p2.playerName}): ${p2.points} pontos.\n`);
    }
}