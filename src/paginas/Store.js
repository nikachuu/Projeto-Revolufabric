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
            console.log("cliquei kkkk")
        }
    })
})


function retrievedProductTypeValue(){
    for (i = 0; i < products["items"].length; i++) {
        console.log(products["items"][i]["product"])
    }
}


