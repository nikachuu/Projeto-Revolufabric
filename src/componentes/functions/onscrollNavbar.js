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

