window.onload = () =>{
    const savedLocalStorageValue = JSON.parse(localStorage.getItem("login"));

    if ( savedLocalStorageValue ) {
        window.location.replace("../LoggedHome/LoggedHome.html")
    };
};


const loginFormBtn = document.querySelector("#loginFormBtn");

const loginForm = document.querySelector("#loginForm");

loginFormBtn.addEventListener("click", function(e){
    e.preventDefault();

    if ( loginForm.email.value !== getData()[0]["register"]["email"] || loginForm.senha.value !== getData()[0]["register"]["password"] ) {
        document.querySelector(".erro").textContent = "Dados inválidos.";
    } else {
        document.querySelector(".erro").textContent = "";
        localStorage.setItem("login", true);
        window.location.replace("../LoggedHome/LoggedHome.html");
    };

});

loginForm.addEventListener("change", function(){

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( regex.test(loginForm.email.value) ) {
        document.querySelector(".btn").className = "btn btn--form"
    } else {
        document.querySelector(".btn").className = "btn btn--form btn--disabled"
    }
});


function getData(){
    return registered["data"];
};

