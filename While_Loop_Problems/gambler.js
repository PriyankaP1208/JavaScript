let amount = 100;
let noOfBets = 0;
let winCount = 0;
while (amount > 0 && amount <= 200) {
    var outcome = Math.floor(Math.random() * 2);
    if (outcome == 0) {
        amount--;
    }
    else {
        amount++;
        winCount++;
    }
    noOfBets++;
}
console.log("won:" + winCount);
console.log("loss:" + noOfBets);