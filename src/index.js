// mudar navbar e seus elementos conforme scroll conforme scroll
//lembrando que cada "tick" do botão 3 do mouse corresponde a scrollY = 100

window.onscroll = () => {

    const nav = document.querySelector('.navbar');
    const logo = document.querySelector(".navbar__li-logo");
    const menu = document.getElementsByClassName("navbar__li-link");

    if ( this.scrollY >= 50 ) {
        nav.className = "navbar navbar__scroll";
        logo.className = "navbar__li-logo navbar__li-logo-scroll";
        changeClassLoop(menu, "navbar__li-link navbar__li-link-scroll");

    } else {
        nav.className = "navbar";
        logo.className = "navbar__li-logo";
        returnOldClassLoop(menu, "navbar__li-link");
    };

};

/* função para forms de registro:
pegar informação que está no select
1- se value="empresa", display do form__pj = "show" e do pf = "hidden"
2- se value="cidadao", display do form__pf = "show" e do pj = "hidden"
*/
const registerSelect = document.querySelector(".select__register");


registerSelect.addEventListener("change", function(e) {
    e.preventDefault();

    const pfForm = document.querySelector(".form__pf");
    const pjForm = document.querySelector(".form__pj");

    if ( registerSelect.value === "cidadao" ) {
        pfForm.classList.toggle("form__pf--hidden")
        pjForm.classList.toggle("form__pj--hidden")

    } else {
        pjForm.classList.toggle("form__pj--hidden")
        pfForm.classList.toggle("form__pf--hidden")

    }
})




// função de mudança para array de elementos, no caso, elementos A

function changeClassLoop(element, previousClass, addedClass) {
    for ( i = 0; i < element.length; i++ ){
        element[i].className = `${previousClass} ${addedClass}`
    };
};

function returnOldClassLoop(element, previousClass) {
    for ( i = 0; i < element.length; i++ ){
        element[i].className = previousClass
    };
};


//quando eu clico na div, é para a animação do hamburguer ocorrer
//e a animação do box shadow e da lista ocorrerem também

document.querySelector(".navbar__menu-div").addEventListener("click", function(e){
    e.preventDefault();

    toggleNasClasses();

});

//quando um item das opcoes for clicado, é pro codigo dar toggle na animacão TAMBÉM

const opcoesMenu = document.getElementsByClassName("navbar__menu-link");

for ( i = 0; i < opcoesMenu.length; i++ ) {
    opcoesMenu[i].addEventListener("click", function(e){
        e.preventDefault();
        toggleNasClasses();
    });
};

function toggleNasClasses() {

    document.querySelector(".navbar__menu-div").classList.toggle("navbar__menu-div--aberto");

    document.querySelector(".navbar__menu-hamb").classList.toggle("navbar__menu-hamb--aberto");

    document.querySelector(".navbar__menu-opcoes").classList.toggle("navbar__menu-opcoes--aberto");

};

