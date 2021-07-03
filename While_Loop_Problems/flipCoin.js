let head = 0;
let tail = 0;
while(head < 11 && tail < 11)
{
    let num = Math.floor(Math.random() * 2);
    if (num == 0) {
        head++;
    }
    else {
        tail++;
    }
}
console.log("head wons " + head + " times");
console.log("tail wons " + tail + " times");
