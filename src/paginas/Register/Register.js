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

        document.querySelector(".form__pj").classList.toggle("form__pj--hidden");
        document.querySelector(".form__pf").className = "form__pf";
        registerSelect.selectedIndex = "1";
    };

    if ( savedLocalStorageValue === "empresa") {

        document.querySelector(".form__pf").classList.toggle("form__pf--hidden");
        document.querySelector(".form__pj").className = "form__pj";
        registerSelect.selectedIndex = "0";
    };

}

registerSelect.addEventListener("change", function(){

    if ( registerSelect.value === "empresa" ) {

        localStorage.setItem("value", JSON.stringify(registerSelect.value));
        document.querySelector(".form__pj").className = "form__pj";
        document.querySelector(".form__pf").classList.toggle("form__pf--hidden");

    } else if ( registerSelect.value === "cidadao" ){

        localStorage.setItem("value", JSON.stringify(registerSelect.value));
        document.querySelector(".form__pf").className = "form__pf";
        document.querySelector(".form__pj").classList.toggle("form__pj--hidden");

    };
});


const formPf = document.querySelector(".form__pf");
const formPj = document.querySelector(".form__pj");
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btns = document.querySelectorAll(".registerFormBtn");
btns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        const savedLocalStorageValue = JSON.parse(localStorage.getItem("value"));

        const possibleErrorsforPf = [ validateEmail(formPf.email.value), formPf.email.value === "", formPf.nome.value === "",  formPf.endereco.value === "", formPf.telefone.value === "", formPf.senha.value === ""];

        console.log(possibleErrorsforPf);

        if ( savedLocalStorageValue === "cidadao" && possibleErrorsforPf.includes(true)) {
            document.querySelector(".pf_erro").textContent = "Dados inválidos.";
        } else if ( savedLocalStorageValue === "cidadao" && possibleErrorsforPf.includes(false) ) {
            document.querySelector(".pf_erro").textContent = "";
            alert("Cadastro realizado com sucesso! (Só que não hahaha)");
        };

        const possibleErrorsforPj = [ validateEmail(formPj.email.value), formPj.email.value === "", formPj.nome.value === "", formPj.nomeempresa.value === "", formPj.endereco.value === "", formPj.telefone.value === "", formPj.senha.value === ""]

        if ( savedLocalStorageValue === "empresa" && possibleErrorsforPj.includes(true)) {
            document.querySelector(".pj_erro").textContent = "Dados inválidos.";
        } else if ( savedLocalStorageValue === "empresa" && possibleErrorsforPj.includes(false)) {
            document.querySelector(".pj_erro").textContent = "";
            alert("Cadastro realizado com sucesso! (Só que não hahaha)");
        };

    })
})

/* change pro botão */

formPf.addEventListener("change", function(){

    if ( regex.test(formPf.email.value) ) {
        document.querySelector("#pjBtn").className = "btn btn--form";
    } else {
        document.querySelector("#pfBtn").className = "btn btn--form btn--disabled";
    };

});

formPj.addEventListener("change", function(){

    if ( regex.test(formPj.email.value) ) {
        document.querySelector("#pjBtn").className = "btn btn--form";
    } else {
        document.querySelector("#pjBtn").className = "btn btn--form btn--disabled";
    };

});


/* função para validar o email e retornar true ou false junto com os outros erros possiveis de input */

function validateEmail(origin) {

    if ( !regex.test(origin) ) {
        return true;
    };
};
