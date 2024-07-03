let buttons = document.querySelectorAll("button");

let num1 = null;
let num2  = null;
let op  = null;

for (const button of buttons) {
    if(button.className == "normal" || button.className == "zero"){
        button.addEventListener('click', () => {
            if(num1 !== null && !op){
                num1 += button.textContent;
                let text = document.querySelector("p");
                text.textContent = num1;
            }
            else if(num1 === null){
                num1 = button.textContent;
                let text = document.querySelector("p");
                text.textContent = num1;
            }
            else{
                if(num2 !== null){
                    num2 += button.textContent;
                    let text = document.querySelector("p");
                    text.textContent = num2;
                }
                else if(num2 === null){
                    num2 = button.textContent;
                    let text = document.querySelector("p");
                    text.textContent = num2;
                }
            }
          });
    }
    else if(button.className == "orange"){
        button.addEventListener('click', () => {
            if(num1 !== null && num2 !== null && op){
                let text = document.querySelector("p");
                text.textContent = calc(op,num1.num2);
                num1 = text.textContent;
                num2 = null;
                op = null;
            }
            op = button.textContent;
        });
    }
    else{
        button.addEventListener('click', () => {
            if(button.textContent == "AC"){
                num1 = null;
                num2 = null;
                op = null;
                let text = document.querySelector("p");
                text.textContent = "";
            }
            else if(button.textContent=="%"){
                if(num2 !== null){
                    num2 /= 100;
                    let text = document.querySelector("p");
                    text.textContent = num2;
                }
                else{
                    num1 /= 100;
                    let text = document.querySelector("p");
                    text.textContent = num1;
                }
            }
            else{
                if(num2 !== null){
                    num2 *= -1;
                    let text = document.querySelector("p");
                    text.textContent = num2;
                }
                else{
                    num1 *= -1;
                    let text = document.querySelector("p");
                    text.textContent = num1;
                }
            }
        });
    }
}

function calc(op, a, b){
    if(op == "+"){
        return Number(num1) + Number(num2);
    }
    else if(op == "-"){
        return Number(num1) - Number(num2);
    }
    else if(op == "*"){
        return Number(num1) * Number(num2);
    }
    else{
        return Number(num1) / Number(num2);
    }
}