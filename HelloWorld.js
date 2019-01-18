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
var bodies = document.body;
var terms = document.createElement('div');
terms.textContent = '제로초';
document.body.append(terms);
var inputWindow = document.createElement('input');
document.body.append(inputWindow);
var button = document.createElement('button');
document.body.append(button);
var resultWindow = document.createElement('dive');
document.body.append(resultWindow);

