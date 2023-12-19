/* Modal */

const openModal = document.querySelector(".anel");
const closeModal = document.querySelector("#fechar");
const modal = document.querySelector("#modal-produto");
const fade = document.querySelector("#fade");





const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
const value = document.querySelector("#value-number");


let a = 1;
number.innerHTML = a;

let b = 22;
value.innerHTML = b;


plus.addEventListener("click", ()=>{
    a++;

    number.innerText = a;

    value.innerText = b * a;
});

minus.addEventListener("click", ()=> {
   if(a > 1){
    a--;
    number.innerText = a;

    value.innerText = (b * a);
   } 
});



console.log(value.value);