var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var bodies = document.body;
var terms = document.createElement('div');
terms.textContent = String(num1) + '곱하기' + String(num2) + '는?';
document.body.append(terms);

//소스활용
var form = document.createElement('form');
document.body.append(form);

var inputWindow = document.createElement('input');
form.append(inputWindow);
inputWindow.type = 'number';

var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);

var resultWindow = document.createElement('div');
form.append(resultWindow);

form.addEventListener('submit', function callbackfunction (e){
    e.preventDefault();
    if (result === inputWindow.value{
        resultWindow.textContent = '딩동댕';

        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        result = num1 * num2;
        terms.textContent = String(num1) + '곱하기' + String(num2) + '는?';

        inputWindow.value = '';
        inputWindow.focus();

    }else{
        resultWindow.textContent = '';
        inputWindow.value = '';
        inputWindow.focus();
    }
});