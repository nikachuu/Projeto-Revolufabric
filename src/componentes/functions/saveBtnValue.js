/* função para forms de registro:
1- pagina de registro tem que saber em qual botão que eu cliquei: localStorage??
2- pagina de registro tem que estar com o valor do select igual o valor armazenado na localStorage
3- localStorage determina qual form aparece primeiro na pg
4- funcao que, quando select é alterado, altera o que ta na localStorage e muda o form
*/

const pfValue = document.querySelector("#cidadao");
const pjValue = document.querySelector("#empresa");

saveBtnValue(pfValue);
saveBtnValue(pjValue);

function saveBtnValue(btn) {
    btn.addEventListener("click", function(){
        console.log(btn.id)
        localStorage.setItem("value", JSON.stringify(btn.id))
    });
};