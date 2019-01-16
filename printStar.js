for(var star = 1; star < 6; star += 1){
    console.log('*'.repeat(star))
}
for(var star = 5; star >= 1; star -= 1){
    console.log('*'.repeat(star))
}
for (var star = 10; star >=2; star = star -2){
    console.log('*'.repeat(star))
}
for (var star = 1; star <=16; star = star*2){
    console.log('*'.repeat(star))
}
for(var star = 5; star >= 1; star = star - 1){
    console.log(' '.repeat(5 - star) + '*'.repeat(star))
}
for(var star = 9; star >= 1; star = star - 2){
    console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star))
}
Math
Math.random()
Math.floor(Math.random() * 9) + 1

/* Multiplication table on chrome console*/
//exit -> shift + esc
while(true) {
    var num1 = Math.floor(Math.random() * 9) + 1
    var num2 = Math.floor(Math.random() * 9) + 1
    var result = num1 * num2
    var condition = true;
    while (condition) {
        var answer = prompt(String(num1) + '곱하기' + String(num2) + '는?')
if (result === Number(answer)) {
    alert('딩동댕')
    condition = false;
} else {
    alert('땡')
}
    }
}