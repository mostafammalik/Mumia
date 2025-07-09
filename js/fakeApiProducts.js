var http = new XMLHttpRequest();
http.open("get", "https://fakestoreapi.com/products");
http.send();
http.onreadystatechange = function () {
  if (http.status == 200 && http.readyState == 4) {
    var products = JSON.parse(http.response);
    console.log("Inside onreadystatechange:", products);
    for (var i = 0; i < products.length; i++) {
      console.log(products[i].image);
      generateProductCard(products[i]);
    }
  }
};

function generateProductCard(product) {
  const productCard = document.createElement("div");
  productCard.style.height = "600px";
  productCard.style.width = "600px";
  productCard.classList.add("product-card");
  productCard.onmousemove = function () {
    buttoncart.style.display = "block";
  };
  productCard.onmouseleave = function () {
    buttoncart.style.display = "none";
  };
  //   productCard.style.display = "grid";
  var productImage = document.createElement("img");
  productImage.style.marginLeft = "25px";
  productImage.style.marginTop = "50px";
  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.style.height = "200px";
  productImage.style.width = "200px";
  productCard.appendChild(productImage);
  productCard.style.display = "inline-block";

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productTitle = document.createElement("h2");

  productTitle.textContent = product.title;
  productTitle.style.overflow = "hidden";
  productTitle.style.whiteSpace = "nowrap";
  productTitle.style.textOverflow = "ellipsis";
  productInfo.appendChild(productTitle);

  var productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  productDescription.textContent = productDescription.textContent.substring(
    0,
    50
  );
  productInfo.appendChild(productDescription);

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;
  productInfo.appendChild(productPrice);

  const productRating = document.createElement("p");
  productRating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
  productInfo.appendChild(productRating);

  const productCategory = document.createElement("p");
  productCategory.textContent = `Category: ${product.category}`;
  productInfo.appendChild(productCategory);

  productCard.appendChild(productInfo);
  document.body.appendChild(productCard);
  //------------------------------------------------omar button -------------------------
  var buttoncart = document.createElement("button");
  buttoncart.innerHTML = "Add To Cart";

  buttoncart.style.width = "290px";
  buttoncart.style.height = "50px";
  buttoncart.style.padding = "10px";
  buttoncart.style.backgroundColor = "#ff3700";
  buttoncart.style.display = "float-bottum";
  buttoncart.style.borderRadius = "15px";
  buttoncart.style.marginTop = "80px";
  buttoncart.style.display = "none";
  productCard.appendChild(buttoncart);
  var main = document.getElementById("allproducts"); 
  main.appendChild(productCard) ;
  //------------------------------------------------omar button -------------------------
}

// Create and append the style element
function addStyles() {
  const style = document.createElement("style");
  style.textContent = `
      .product-card {
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        max-width: 300px;
        background-color: #fff;
        margin: 20px;
        transition: transform 0.3s, box-shadow 0.3s;
      }
  
      .product-card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
  
      .product-card img {
        width: 100%;
        height: auto;
      }
  
      .product-info {
        padding: 15px;
      }
  
      .product-info h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #333;
      }
  
      .product-info p {
        font-size: 1em;
        margin: 5px 0;
        color: #666;
      }
    `;
  document.head.appendChild(style);
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  addStyles();
});

// Example usage:

//select all categories
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => console.log(json));
