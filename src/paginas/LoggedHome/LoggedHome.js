document.querySelector(".logout").addEventListener("click", function() {
    localStorage.removeItem("login");
})

window.onload = () => {
    showUser();
};

function getUsers() {
    return registered["data"];
};

function showUser() {

    let userSection = document.getElementById("user");

    userSection.innerHTML = `
      ${getUsers().map(
        (user) => `
            <h2>Olá, ${user["register"]["name"]}!</h2>
            <img class="roundimg logged__img" src="${user["register"]["photo"]}"/>
            <h3>Dados cadastrados</h3>
            <div class="userdata">
                <p>${user["register"]["address"]["main"]}, ${user["register"]["address"]["complement"]}</p>
                <p>${user["register"]["phone"]}</p>
            </div>
        `)};
    `;

    let donationSection = document.getElementById("donations");

    donationSection.innerHTML = `
        ${getUsers().map(
            (user) => `
                ${user["register"]["previousDonations"]}
            `
        )}
    `;

    let purchaseSection = document.getElementById("purchases");

    purchaseSection.innerHTML = `
        ${getUsers().map(
            (user) => `
                ${user["register"]["previousPurchases"]}
            `
        )}
    `;
};