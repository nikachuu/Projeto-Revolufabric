window.onload = () => {
    showProducts();
    console.log(getProducts())
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