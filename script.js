let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
//  function val(val) {
//     document.getElementById("display").value += val
// }
// function equalsign() {
//     var a = document.getElementById("display").value
//     var b = eval(a)
//     document.getElementById("display").value = b
//     document.getElementById("display2").value+=a
// }
// function del(){
//     display.value=display.value.slice(0, -1)
// }
// function AC(){
//     display.value=""
// }
buttons.map( b => {
    b.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});