/* window object */

window
window['document']
window.resizeTo(200,200)
/* Window = Browser
document = page(tab) */

var newWindow = window.open()
window.alert('') // window는 생략 가능, Global Object
alert('') == window.aletr('')
var a = 'b';
window.a; //'b'

/*함수 안의 변수는 window에 등록이 되지 않는다.*/
function 기억하세요(){
    var 키 = 170;
}
기억하세요() // ->undefined
window.키 // ->undefined

var 이름 = '제로초' //와 같은 직접적인 변수 선언만 window에서

#document //js와 html 사이의 통역사 역할
window.document
console.dir(document)

DOM Object
Document Object Model
