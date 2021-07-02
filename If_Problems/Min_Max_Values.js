let no1 = Math.floor(Math.random() * 1000);
let no2 = Math.floor(Math.random() * 1000);
let no3 = Math.floor(Math.random() * 1000);
let no4 = Math.floor(Math.random() * 1000);
let no5 = Math.floor(Math.random() * 1000);  

console.log("Numbers are:\n" + no1 + "\n" + no2 + "\n" + no3 + "\n" + no4 + "\n" + no5 + " ");

if (no1 > no2 && no1 > no3 && no1 > no4 && no1 > no5)
    console.log("Maximum number is:" + no1);
if (no2 > no1 && no2 > no3 && no2 > no4 && no2 > no5)
    console.log("Maximum number is:" + no2);
if (no3 > no1 && no3 > no2 && no3 > no4 && no3 > no5)
    console.log("Maximum number is:" + no3);
if (no4 > no1 && no4 > no2 && no4 > no3 && no4 > no5)
    console.log("Maximum number is:" + no4);
if (no5 > no1 && no5 > no2 && no5 > no3 && no5 > no4)
    console.log("Maximum number is:" + no5);

if (no1 < no2 && no1 < no3 && no1 < no4 && no1 < no5)
    console.log("Minimum number is:" + no1);
if (no2 < no1 && no2 < no3 && no2 < no4 && no2 < no5)
    console.log("Minimum number is:" + no2);
if (no3 < no1 && no3 < no2 && no3 < no4 && no3 < no5)
    console.log("Minimum number is:" + no3);
if (no4 < no1 && no4 < no2 && no4 < no3 && no4 < no5)
    console.log("Minimum number is:" + no4);
if (no5 < no1 && no5 < no2 && no5 < no3 && no5 < no4)
    console.log("Minimum number is:" + no1);

