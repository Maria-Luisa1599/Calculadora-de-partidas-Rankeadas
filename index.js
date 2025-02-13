var playerWins =100, playerLosses = 6
// let calcResult = rankedCalculator(9, 5)

function rankedCalculator(playerWins, playerLosses){
    return playerWins - playerLosses
}

let saldoVitorias = rankedCalculator(playerWins, playerLosses);
console.log(`O saldo de Rankeadas é de: ${saldoVitorias}`)

let nivel

if (saldoVitorias <= 10){
    nivel = "FERRO"
    console.log(`O Herói tem ${playerWins} vitórias e está no nível de ${nivel}`)  
}else if (playerWins >= 11 && playerWins < 21){
    nivel = "BRONZE"
    console.log(`O Herói tem ${playerWins} vitórias e está no nível de ${nivel}`)  
}else if (playerWins >= 21 && playerWins < 50){
    nivel = "PRATA"
    console.log(`O Herói tem ${playerWins} vitórias e está no nível de ${nivel}`)  
}else if (playerWins >= 51 && playerWins < 80){
    nivel = "OURO"
    console.log(`O Herói tem ${playerWins} vitórias e está no nível de ${nivel}`)  
}else if (playerWins >= 81 && playerWins < 90){
    nivel = "DIAMANTE"
    console.log(`O Herói tem ${playerWins} vitórias e está no nível de ${nivel}`)  
}else if (playerWins >= 91 && playerWins < 100){
    nivel = "LENDÁRIO"
    console.log(`O Herói tem ${playerWins} vitórias e está no nível de ${nivel}`)  
}else{
    nivel = "IMORTAL"
    console.log(`O Herói  tem de saldo de ${playerWins} vitórias e está no nível de ${nivel}`)  
}


let multiplayer = [
    [8, 6],
    [24, 1],
    [110, 7],
    [73, 11]
]

let i = 0;
while (i < multiplayer.length){

    playerWins = multiplayer[i][0];
    playerLosses = multiplayer[i][1];
    let saldo = playerWins - playerLosses;

    if (saldo < 10){saldo
        nivel = "FERRO"
    }else if (saldo >= 11 && playerWins < 21){
        nivel = "BRONZE"
    }else if (saldo >= 21 && playerWins < 50){
        nivel = "PRATA"
    }else if (saldo >= 51 && playerWins < 80){
        nivel = "OURO"
    }else if (saldo >= 81 && playerWins < 90){
        nivel = "DIAMANTE"
    }else if (saldo >= 91 && playerWins < 100){
        nivel = "LENDÁRIO"
    }else if (saldo >= 101){
        nivel = "IMORTAL"
    }

    console.log(`O Herói ${i + 1} tem saldo de ${saldo} e está no nível de ${nivel}`);
    i++
}