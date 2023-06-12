const dogs = Array.from(document.querySelectorAll(".dogCard"))
const modalImg = document.querySelector(".modalImg")
const closeButton = document.querySelector(".closeButton")
const overlay = document.querySelector(".overlay")
const modalTitle = document.querySelector(".modalTitle")
const washPrice = document.querySelector(".washPrice")
const shavePrice = document.querySelector(".shavePrice")
const transportPrice = document.querySelector(".transportPrice")
const hydration = document.querySelector(".hydration")
const dogFood = document.querySelector(".dogFood")
const straightening = document.querySelector(".straightening")
closeButton.addEventListener("click", function close(){
    overlay.style.display = "none"
})
dogs.forEach((dog, index)=>{
    dog.addEventListener("click", function dogInfo(){
        if(index == 0){
            modalImg.src = '../imagens/husky.png'
            modalTitle.innerHTML = "Husky Siberiano"
            washPrice.innerHTML = "Preço do banho: R$120,00"
            shavePrice.innerHTML = "Preço da tosa: R$80,00"
            transportPrice.innerHTML = "Preço do transporte: R$30,00"
            dogFood.innerHTML = "Consumo de ração: R$20,00"
            hydration.innerHTML = "Preço da hidratação: R$70,00" 
            straightening.innerHTML = "Preço do alisamento: R$60,00 "
        }
        if(index == 1){
            modalImg.src = '../imagens/doberman_raça.png'
            modalTitle.innerHTML = "Doberman"
            washPrice.innerHTML = "Preço do banho: R$100,00"
            shavePrice.innerHTML = "Preço da tosa: R$30,00"
            transportPrice.innerHTML = "Preço do transporte: R$30,00"
            dogFood.innerHTML = "Consumo de ração: R$20,00"
            hydration.innerHTML = "Preço da hidratação: R$30,00" 
            straightening.innerHTML = "Não é possível fazer alisamento nessa raça"
        }
        if(index == 2){
            modalImg.src = '../imagens/spitz.jpg'
            modalTitle.innerHTML = "Spitz Alemão"
            washPrice.innerHTML = "Preço do banho: R$60,00"
            shavePrice.innerHTML = "Preço da tosa: R$30,00"
            transportPrice.innerHTML = "Preço do transporte: R$10,00"
            dogFood.innerHTML = "Consumo de ração: R$5,00"
            hydration.innerHTML = "Preço da hidratação: R$60,00" 
            straightening.innerHTML = "Alisamento: R$50,00"
        }
        if(index == 3){
            modalImg.src = '../imagens/pinscher.png'
            modalTitle.innerHTML = "Pinscher"
            washPrice.innerHTML = "Preço do banho: R$30,00"
            shavePrice.innerHTML = "Preço da tosa: R$15,00"
            transportPrice.innerHTML = "Preço do transporte: R$10,00"
            dogFood.innerHTML = "Consumo de ração: R$5,00"
            hydration.innerHTML = "Preço da hidratação: R$30,00" 
            straightening.innerHTML = "Não é possível fazer alisamento nessa raça"
        }
        if(index == 4){
            modalImg.src = '../imagens/poodle.png'
            modalTitle.innerHTML = "Poodle"
            washPrice.innerHTML = "Preço do banho: R$40,00"
            shavePrice.innerHTML = "Preço da tosa: R$35,00"
            transportPrice.innerHTML = "Preço do transporte: R$20,00"
            dogFood.innerHTML = "Consumo de ração: R$10,00"
            hydration.innerHTML = "Preço da hidratação: R$40,00" 
            straightening.innerHTML = "Não é possível fazer alisamento nessa raça"
        }
        if(index == 5){
            modalImg.src = '../imagens/yorkshire.png'
            modalTitle.innerHTML = "Yorkshire"
            washPrice.innerHTML = "Preço do banho: R$40,00"
            shavePrice.innerHTML = "Preço da tosa: R$35,00"
            transportPrice.innerHTML = "Preço do transporte: R$10,00"
            dogFood.innerHTML = "Consumo de ração: R$10,00"
            hydration.innerHTML = "Preço da hidratação: R$40,00" 
            straightening.innerHTML = "Alisamento: R$40,00"
        }
        if(index == 6){
            modalImg.src = '../imagens/border_collie.png'
            modalTitle.innerHTML = "Border Collie"
            washPrice.innerHTML = "Preço do banho: R$70,00"
            shavePrice.innerHTML = "Preço da tosa: R$45,00"
            transportPrice.innerHTML = "Preço do transporte: R$30,00"
            dogFood.innerHTML = "Consumo de ração: R$20,00"
            hydration.innerHTML = "Preço da hidratação: R$50,00" 
            straightening.innerHTML = "Alisamento: R$40,00"
        }
        if(index == 7){
            modalImg.src = '../imagens/bulldog.png'
            modalTitle.innerHTML = "Bulldog"
            washPrice.innerHTML = "Preço do banho: R$35,00"
            shavePrice.innerHTML = "Preço da tosa: R$25,00"
            transportPrice.innerHTML = "Preço do transporte: R$15,00"
            dogFood.innerHTML = "Consumo de ração: R$10,00"
            hydration.innerHTML = "Preço da hidratação: R$40,00" 
            straightening.innerHTML = "Não é possível fazer alisamento nessa raça"
        }
        if(index == 8){
            modalImg.src = '../imagens/pug.png'
            modalTitle.innerHTML = "Pug"
            washPrice.innerHTML = "Preço do banho: R$30,00"
            shavePrice.innerHTML = "Preço da tosa: R$25,00"
            transportPrice.innerHTML = "Preço do transporte: R$10,00"
            dogFood.innerHTML = "Consumo de ração: R$10,00"
            hydration.innerHTML = "Preço da hidratação: R$30,00" 
            straightening.innerHTML = "Não é possível fazer alisamento nessa raça"
        }
        if(index ==9){
            modalImg.src = '../imagens/pastor_alemao.png'
            modalTitle.innerHTML = "Pastor Alemão"
            washPrice.innerHTML = "Preço do banho: R$120,00"
            shavePrice.innerHTML = "Preço da tosa: R$50,00"
            transportPrice.innerHTML = "Preço do transporte: R$30,00"
            dogFood.innerHTML = "Consumo de ração: R$30,00"
            hydration.innerHTML = "Preço da hidratação: R$80,00" 
            straightening.innerHTML = "Alisamento: R$40,00"
        }
        if(index == 10){
            modalImg.src = '../imagens/maltes.png'
            modalTitle.innerHTML = "Maltês"
            washPrice.innerHTML = "Preço do banho: R$40,00"
            shavePrice.innerHTML = "Preço da tosa: R$30,00"
            transportPrice.innerHTML = "Preço do transporte: R$10,00"
            dogFood.innerHTML = "Consumo de ração: R$10,00"
            hydration.innerHTML = "Preço da hidratação: R$40,00" 
            straightening.innerHTML = "Alisamento: R$40,00"
        }
        if(index == 11){
            modalImg.src = '../imagens/golden.png'
            modalTitle.innerHTML = "Golden Retriever"
            washPrice.innerHTML = "Preço do banho: R$120,00"
            shavePrice.innerHTML = "Preço da tosa: R$60,00"
            transportPrice.innerHTML = "Preço do transporte: R$30,00"
            dogFood.innerHTML = "Consumo de ração: R$30,00"
            hydration.innerHTML = "Preço da hidratação: R$80,00" 
            straightening.innerHTML = "Alisamento: R$60,00"
        }
        console.log("entrou", index);
        overlay.style.display = "flex"
    })
});

function menuShow() {
    let mobileMenu = document.querySelector('.mobileMenu');
    if(mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
    }else{
        mobileMenu.classList.add('open');
    }
}