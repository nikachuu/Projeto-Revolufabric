/* função para forms de registro:
1- pagina de registro tem que saber em qual botão que eu cliquei: localStorage??
2- pagina de registro tem que estar com o valor do select igual o valor armazenado na localStorage
3- localStorage determina qual form aparece primeiro na pg
4- funcao que, quando select é alterado, altera o que ta na localStorage e muda o form
*/

const registerSelect = document.querySelector(".select__register")

window.onload = () => {
    const savedLocalStorageValue = JSON.parse(localStorage.getItem("value"));

    if ( savedLocalStorageValue === "cidadao") {

        document.querySelector(".form__pj").classList.toggle("form__pj--hidden")
        document.querySelector(".form__pf").className = "form__pf"
        registerSelect.selectedIndex = "1"
    }

    if ( savedLocalStorageValue === "empresa") {

        document.querySelector(".form__pf").classList.toggle("form__pf--hidden")
        document.querySelector(".form__pj").className = "form__pj"
        registerSelect.selectedIndex = "0"
    }

}

registerSelect.addEventListener("change", function(){

    if ( registerSelect.value === "empresa" ) {

        localStorage.setItem("value", JSON.stringify(registerSelect.value))
        console.log(document.querySelector(".form__pj"), document.querySelector(".form__pf"))
        document.querySelector(".form__pj").className = "form__pj"
        document.querySelector(".form__pf").classList.toggle("form__pf--hidden")

    } else if ( registerSelect.value === "cidadao" ){

        localStorage.setItem("value", JSON.stringify(registerSelect.value))
        console.log(document.querySelector(".form__pj"), document.querySelector(".form__pf"))
        document.querySelector(".form__pf").className = "form__pf"
        document.querySelector(".form__pj").classList.toggle("form__pj--hidden")
        
    }
})


