export function getCircuit(scanner) {
    let options = ['Turn', 'Straight', 'Duel'];
    let Circuit = [];

    let laps = scanner('Informe o número de voltas da corrida: ');

    for (let rep = 0; rep < laps; rep++) {
        const randomOption = Math.floor(Math.random() * options.length);
        Circuit.push(options[randomOption]);
    }
    console.clear();
    return Circuit;
}