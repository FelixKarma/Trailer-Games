let popen1 = document.querySelector('#popen1')
let pclose1 = document.querySelector('#pclose1')

function afficher() {
    document.querySelector('#popup1').style.display = "flex";

}

function masquer() {
    document.querySelector('#popup1').style.display = "none";

}

popen1.addEventListener("click",afficher);
pclose1.addEventListener('click',masquer);