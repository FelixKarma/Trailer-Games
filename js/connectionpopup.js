let popen = document.querySelector('#popen')
let pclose = document.querySelector('#pclose')

function afficher() {
    document.querySelector('#popup').style.display = "flex";

}

function masquer() {
    document.querySelector('#popup').style.display = "none";

}

popen.addEventListener("click",afficher);
pclose.addEventListener('click',masquer);
