/*Tag words while Version
var word = '제로초초초'
while (true){
var answer = prompt(word)
if (word[word.length - 1] === answer[0]){
    word = answer;
    alert('딩동댕')
} else {
    alert('땡')
    }
}
*/
/*Tag words For Version
for (var word = '제로초초초'; true; ){
    var answer = prompt(word)
    if (word[word.length - 1] === answer[0]){
        word = answer;
        alert('딩동댕')
    } else {
        alert('땡')
    }
}
*/
//Make tags
var 바디 = document.body;
var terms = document.createElement('div');
terms.textContent = '제로초';
document.body.append(terms);
var inputWindow = document.createElement('input');
document.body.append(inputWindow);
var button = document.createElement('button');
button.textContent = '입력!';
document.body.append(button);
var resultWindow = document.createElement('div');
document.body.append(resultWindow);

button.addEventListener('click', function callback () { // fucntion is call backfunction
    if(terms.textContent[terms.textContent.length - 1] === inputWindow.value [0]){
        //'안녕하세요'[4]
        resultWindow.textContent = '딩동댕';
    }else {
        resultWindow.textContent = '땡!';
    }
});