function getProduct() {
  var product = localStorage.getItem("singleproduct");
  console.log("in side the function");
  console.log(JSON.parse(product));
  return product;
}

document.getElementById("add-to-cart").addEventListener("click", function () {
  alert("Product added to cart!");
});

document.getElementById("favorite").addEventListener("click", function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    alert("Product added to favorites!");
  } else {
    alert("Product removed from favorites!");
  }
});

// Simulating loading of reviews
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("reviews-container").innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">John Doe</h5>
                    <p class="card-text">Great product! Highly recommend it.</p>
                    <p class="card-text"><small class="text-muted">Posted on January 1, 2024</small></p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Jane Smith</h5>
                    <p class="card-text">Good value for money.</p>
                    <p class="card-text"><small class="text-muted">Posted on February 15, 2024</small></p>
                </div>
            </div>
        `;
  }, 1000);
});
///---------------------------------------------------------------------------- product data
var product = getProduct();
var description = document.getElementById("product-description");
product = JSON.parse(product);
console.log(product);
description.innerHTML = product.description;
description.style.fontSize = "35px";

var _name = document.getElementById("product-title");
console.log(product);
_name.innerHTML = product.name;
var price = document.getElementById("product-price");
console.log(product);
price.innerHTML = product.price;
price.style.color = "grey";
price.style.fontSize = "30px";
price.style.textDecoration = "line-through";

var img1 = document.getElementById("img1");
img1.setAttribute("src", `${product.image}`);
img1.style.width = "400px";
console.log(product.image);

var img2 = document.getElementById("img2");
img2.setAttribute("src", `${product.images[2]}`);
img2.style.width = "400px";
console.log(product.images[3]);

var img3 = document.getElementById("img3");
img3.setAttribute("src", `${product.images[3]}`);
img3.style.width = "400px";
console.log(product.images[3]);

var img4 = document.getElementById("img4");
img4.setAttribute("src", `${product.images[4]}`);
img4.style.width = "400px";
console.log(product.images[3]);

var img5 = document.getElementById("img5");
img5.setAttribute("src", `${product.images[4]}`);
img5.style.width = "400px";
console.log(product.images[3]);

//----------------------------------------------------------------------------
// function LoopOverImages(images) { /// try to solve
//   var len = images.length;
//   var div_images = document.getElementById("div_images");
//   console.log(len);
//   for (var i = 1; i <= len; i++) {
//     var img = document.createElement("img");
//     img.setAttribute("src", `${product.images[i]}`);
//     img.style.width = "400px";
//     div_images.appendChild(img);
//     console.log(product.images[i]);
//   }
// }
// LoopOverImages(product.images);
