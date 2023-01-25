//adicionar variavel constante que seleciona o botão pelo id
const buttonOpenModal = document.querySelector('#button');

//adicionar constante para selecionar o modal
const selectModal = document.querySelector('.modal')

// adicionar constante para selecionar botção de fechar modal
const buttonCloseModal = document.querySelector('.close')

// adicionar variavel para entrada data final da contagem
let countDownDate = new Date('Oct 25, 2023 07:00:00').getTime();


//atualizar contador a cada segundo

let update = setInterval(function(){

    //Pega a data de hoje
    let today = new Date().getTime();

    //acha o tempo restante entre hoje e a data final

    let timeLeft = countDownDate - today;

    // Calculo de tempo dias, horas, minutos e segundos
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    //mostrar o resultado na pagina
    document.getElementById("countdowndays").innerHTML = days + " ";
    document.getElementById("countdownhours").innerHTML = hours + ":";
    document.getElementById("countdownminutes").innerHTML = minutes + ":";
    document.getElementById("countdownseconds").innerHTML = seconds + " ";

    //se o tempo da contagem zerar 
    if (timeLeft < 0) {
        clearInterval(update);
        document.getElementById("countdown").innerHTML = "Já foi realizado o lançamento!";
    }

},1000);



//função responsavel por adicionar classe ao modal para ele aparecer na tela após o click
function openModal(){
    selectModal.classList.remove('invisible')
}

//função responsavel por fechar modal
function closeModal(){
    selectModal.classList.add('invisible')
}


//adiconar evento ao botão inscreva-se
buttonOpenModal.addEventListener('click',openModal)

//adicionar evento no botão de fechar a modal
buttonCloseModal.addEventListener('click',closeModal)

