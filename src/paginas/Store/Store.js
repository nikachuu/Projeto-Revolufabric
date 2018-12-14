window.onload = () => {
    showProducts();
};

function getProducts(){
    return products["items"];
};

function showProducts(){
    let productSection = document.getElementById("products");

    productSection.innerHTML = `
      ${getProducts().map(
          (product) => `
            <div class="product">
                <img src="${product["product"]["image"]}"/>
                <p>
                    ${product["product"]["name"]} <br/>
                    ${Number(product["product"]["price"]["value"]).toLocaleString("pt-br", { minimumFractionDigits: 2, style: "currency", currency: "BRL" })}
                    ${product["product"]["price"]["sampleSize"]}
                </p>
            </div>
            `).join("")}`
  };

document.querySelectorAll(".filterData").forEach(clickedFilter => {
    clickedFilter.addEventListener("click", function(e){
        e.preventDefault();

        if ( clickedFilter.innerText === "Poliéster" ) {
            document.getElementById("products").innerHTML = `
                ${filterProducts("pol").map((product) => `
                    <div class="product">
                        <img src="${product["image"]}"/>
                        <p>
                            ${product["name"]} <br/>
                            ${Number(product["price"]["value"]).toLocaleString("pt-br", { minimumFractionDigits: 2, style: "currency", currency: "BRL" })}
                            ${product["price"]["sampleSize"]}
                        </p>
                    </div> 
                `).join("")}`
        }

        if ( clickedFilter.innerText === "Nylon" ) {
            document.getElementById("products").innerHTML = `
            ${filterProducts("nyl").map((product) => `
                <div class="product">
                    <img src="${product["image"]}"/>
                    <p>
                        ${product["name"]} <br/>
                        ${Number(product["price"]["value"]).toLocaleString("pt-br", { minimumFractionDigits: 2, style: "currency", currency: "BRL" })}
                        ${product["price"]["sampleSize"]}
                    </p>
                </div> 
            `).join("")}`
        }

        if ( clickedFilter.innerText === "Algodão" ) {
            document.getElementById("products").innerHTML = `
            ${filterProducts("cot").map((product) => `
                <div class="product">
                    <img src="${product["image"]}"/>
                    <p>
                        ${product["name"]} <br/>
                        ${Number(product["price"]["value"]).toLocaleString("pt-br", { minimumFractionDigits: 2, style: "currency", currency: "BRL" })}
                        ${product["price"]["sampleSize"]}
                    </p>
                </div> 
            `).join("")}`
        }

        if ( clickedFilter.innerText === "Todos os tipos") {
            showProducts();
        }
    })
})

function retrieveProductKeys(){
    let productsArr = [];
    for (i = 0; i < products["items"].length; i++) {
        productsArr.push(products["items"][i]["product"]);
    };
    return productsArr;
};

function filterProducts(specificValue) {
    return retrieveProductKeys().filter(product => product["productType"] === specificValue)
}