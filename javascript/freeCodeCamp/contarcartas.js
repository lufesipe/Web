var count = 0;

function cc(card) {
    if (card>=2 && card<=6){
        count += 1
        console.log("Somou 1")
    } else if (card>=7 && card<=9){
        count += 0
        console.log("Somou 0")
    }
    switch (card) {
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1
            console.log("Subtraiu 1")
    }
    if (count>0){
        return `${count} Bet`
    } else {
        return `${count} Hold`
    }
}

cc(2)
cc("K")
cc("A")
console.log(count)
console.log(cc())