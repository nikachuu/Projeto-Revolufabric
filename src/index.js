// mudar navbar e seus elementos conforme scroll conforme scroll
//lembrando que cada "tick" do botão 3 do mouse corresponde a scrollY = 100

window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    const logo = document.querySelector(".navbar__li-logo");
    const menu = document.getElementsByClassName("navbar__li-link");

    if ( window.screen.availHeight <= 700 && this.scrollY >= 600) {
        nav.className += " navbar__scroll";
        logo.className += " navbar__li-logo-scroll";
        changeClassLoop(menu, " navbar__li-link-scroll");

    } else if ( this.scrollY >= 700 ){
        nav.className += " navbar__scroll";
        logo.className += " navbar__li-logo-scroll";
        changeClassLoop(menu, " navbar__li-link-scroll");

    } else {
        nav.className = "navbar";
        logo.className = "navbar__li-logo";
        returnOldClassLoop(menu, "navbar__li-link");
    };
};

// função de mudança para array de elementos, no caso, elementos A

function changeClassLoop(element, addedClass) {
    for ( i = 0; i < element.length; i++ ){
        element[i].className += addedClass
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
