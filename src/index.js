
//quando eu clico na div, é para a animação do hamburguer ocorrer
//e a animação do box shadow e da lista ocorrerem também

document.querySelector(".navbar__menu-div").addEventListener("click", function(e){
    e.preventDefault();

    toggleNasClasses();

});

//quando um item das opcoes for clicado, é pro codigo dar toggle na animacão TAMBÉM

const opcoesMenu = document.getElementsByClassName("navbar__menu-link");

for ( i = 0; i < opcoesMenu.length; i++ ) {
    opcoesMenu[i].addEventListener("click", function(){
        toggleNasClasses();
    });
};

function toggleNasClasses() {

    document.querySelector(".navbar__menu-div").classList.toggle("navbar__menu-div--aberto");

    document.querySelector(".navbar__menu-hamb").classList.toggle("navbar__menu-hamb--aberto");

    document.querySelector(".navbar__menu-opcoes").classList.toggle("navbar__menu-opcoes--aberto");

};
/* smooth scrolling quando clicar em ancoras da home 
seleciona todos os elementos hRef, e pra cada um, coloca o comportamento de scroll como Smooth */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
