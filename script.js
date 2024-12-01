let text = ""
let text_decision = ""
let stat = false; // RESULTASGKASDF][GKAFOJDAGKLADFGADF;GADFGK]
const numbers = ['0','1','2','3','4','5','6','7','8','9','.']; // MASSIVE AKSDASD;FGMKAS;GLKADF
const action = ['+','×','-','/'];
const out = document.querySelector(".text p")


function clearall() {
    out.textContent=0;
    text = ""
    text_decision = ""
}

document.querySelector('.ac').onclick=clearall

document.querySelector(".buttons").onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    const key = event.target.textContent;
    

    if (numbers.includes(key) || action.includes(key)) {
        if (key === "×") {
            text_decision+='*'
        }
        else {
            text_decision+= key
        }

        if (text !== 0) {
            text+=key
        }
        else if (text === 0) {
            text = key
        }
        out.textContent = text
        
        console.log(key)
        console.log(numbers.includes(key))
    }
    
    if (action.includes(key) && num1 !== "") {
        oper = key;
    }

    if (key === '=') {
        text = eval(text_decision);
        if (text !== 0) {
            text_decision = text
        }
        
    }
    out.textContent = text

}

