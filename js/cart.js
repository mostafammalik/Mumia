function calculatePercentageDiscount(originalPrice, discountedPrice) {
  if (originalPrice === 0) {
    return 0;
  }
  let discount = originalPrice - discountedPrice;
  let percentageDiscount = (discount / originalPrice) * 100;
  return percentageDiscount;
}

var contener = document.createElement("section");
contener.style.display = "inline-block";
contener.style.margin = "0 35px";
//contener.style.width = "95%";
// contener.style.marginBlock = "10px";
// contener.style.marginInline = "60px";
// contener.style.paddingInline = "25px";
// contener.style.backgroundColor = "lightgray"
// contener.style.backgroundColor = "#fbd290"
// contener.style.position="flex"
var cont = 0;
function createProductCard(_name, _price, _img, _desc, _sale_price, code) {
  // var obj = {
  //   name: _name,
  //   description: _desc,
  //   price: _price,
  //   image: _img,
  //   salesprice: _sale_price,
  //   offercode: code,
  //   count_of_prodct:0
  // };
  // cartcontent.push(obj);

  // Create the card div
  var card = document.createElement("div");
  card.style.display = "inline-block";
  // card.style.display = "flex";
  // card.style.backgroundColor = "#dae0eb";
  // card.classList.add("card");
  card.className = "card";
  card.style.marginInline = "15px";
  card.style.paddingInline = "10px";
  card.style.marginBlock = "15px";
  // card.style.height = "600px";
  card.style.height = "max-content";
  card.style.width = "calc(90% / 4)";
  card.style.border = "1px solid gray";
  card.style.borderRadius = "15px";
  // Create the best seller badge
  // const bestSellerBadge = document.createElement("div");
  // bestSellerBadge.classList.add("best-seller-badge");
  // bestSellerBadge.textContent = "Best Seller";
  // card.appendChild(bestSellerBadge);

  // Create the product image
  var productImage = document.createElement("img");
  productImage.src = `${_img}`;
  productImage.style.width = "70%";
  productImage.style.height = "250px";
  productImage.style.marginInline = "40px";
  productImage.style.mixBlendMode = "multiply";
  productImage.classList.add("product-image");
  productImage.className = "product-image";
  card.appendChild(productImage);

  // Create the product title
  var productTitle = document.createElement("h2");
  // productTitle.classList.add("product-title");
  productTitle.className = "product-title";
  productTitle.style.textAlign = "center";
  productTitle.textContent = `${_name}`;
  card.appendChild(productTitle);

  // Create the rating div
  var rating = document.createElement("div");
  // rating.classList.add("rating");
  rating.className = "rating";
  rating.style.maxHeight = "55px";
  rating.style.overflow = "hidden";
  var ratingText = document.createElement("span");
  // ratingText.classList.add("rating-text");
  ratingText.className = "rating-text";
  ratingText.textContent = _desc;
  ratingText.style.fontFamily = "Arial, Helvetica, sans-serif";
  ratingText.style.fontSize = "17px";
  rating.appendChild(ratingText);

  // var ratingIcon = document.createElement("i");
  // // ratingIcon.classList.add("fas", "fa-star", "rating-icon");
  // ratingIcon.className="fa-regular fa-star";
  // rating.appendChild(ratingIcon);

  card.appendChild(rating);

  // Create the price paragraph
  var price = document.createElement("p");
  // price.classList.add("price");
  price.className = "price";

  // var priceText = document.createTextNode(_sale_price);
  // console.log(typeof( _sale_price));
  // price.appendChild(priceText);
  price.innerHTML += `${_sale_price} $ <br>`;

  var oldPrice = document.createElement("p");
  // oldPrice.classList.add("old-price");
  oldPrice.className = "old-price";
  // oldPrice.textContent = _price;
  oldPrice.innerHTML = `<del>${_price} $</del> &nbsp;&nbsp;`;
  oldPrice.style.color = "gray";
  oldPrice.style.display = "inline-block";
  // oldPrice.style.display="flex"
  price.appendChild(oldPrice);

  var discount = document.createElement("span");
  // discount.classList.add("discount");
  discount.className = "discount";
  //  var offer = document.getElementById("offer");
  discount.style.color = "#FF3700";
  var disc = calculatePercentageDiscount(_price, _sale_price);
  discount.textContent = `-${Number(disc.toFixed(2))}%`;
  price.style.fontSize = "25px";
  price.appendChild(discount);

  card.appendChild(price);
  ///////////
  var numprod = document.createElement("p");
  numprod.innerHTML = `${code} Piece`;
  numprod.style.textAlign = "center";
  numprod.style.fontWeight = "bold";

  numprod.style.color = "#FF3700";
  card.appendChild(numprod);

  // Create the delivery paragraph
  // var delivery = document.createElement("p");
  // // delivery.classList.add("delivery");
  // delivery.className="delivery";
  // delivery.textContent = "Free Delivery";
  // card.appendChild(delivery);

  // Create the express div
  // var express = document.createElement("div");
  // express.classList.add("express");

  // var expressIcon = document.createElement("img");
  // expressIcon.src = "https://i.imgur.com/uO7j4t2.png";
  // expressIcon.classList.add("express-icon");
  // express.appendChild(expressIcon);

  // var expressText = document.createElement("span");
  // expressText.classList.add("express-text");
  // expressText.textContent = "Get it by 20 July";
  // express.appendChild(expressText);

  // card.appendChild(express);

  // Create the favorite icon
  // var favoriteIcon = document.createElement("i");
  // favoriteIcon.classList.add("fas", "fa-heart", "favorite-icon");
  // card.appendChild(favoriteIcon);

  // Create the add to cart button
  var cartButton = document.createElement("button");
  // cartButton.classList.add("cart-button");
  // cartButton.className="cart-button";
  cartButton.setAttribute("id", "cart1");
  cartButton.textContent = "Add to Cart";
  cartButton.style.fontSize = "25px";
  cartButton.style.width = "99%";
  cartButton.style.height = "40px";
  cartButton.style.marginBottom = "10px";
  cartButton.style.backgroundColor = "#ff3700";
  cartButton.style.border = "1px solid black";
  cartButton.style.borderRadius = "10px";
  cartButton.style.display = "none";
  card.appendChild(cartButton);
  // card.innerHTML+=`<br>`
  // Append the card to the body or any other container
  contener.appendChild(card);

  // var x
  // cartButton.onclick = function () {
  //   cont++;
  //   for (let i = 0; i < 44; i++) {
  //     if (code == cartcontent[i].offercode) {
  //       // console.log(cartcontent[i].description);
  //        x= cartcontent[i].count_of_prodct;
  //     //  console.log( cartcontent[i+1].count_of_prodct);
  //       cartcontent[i].count_of_prodct = ++x;
  //       // console.log(x);
  //     }
  //   }
  //   // window.location = './Cart.html';
  //   var crtnum = document.getElementById("cart-number");
  //   crtnum.innerHTML = `${cont}`;
  //   localStorage.setItem('myArray', JSON.stringify(cartcontent));
  // }

  // card.onmousemove = function () {
  //   card.style.boxShadow = "5px 5px 5px gray"
  //   card.style.transform = "scale(1.05)";
  //   cartButton.style.display="block"
  // }
  // card.onmouseleave = function () {
  //   card.style.boxShadow="none"
  //   card.style.transform = "scale(1)";
  //   cartButton.style.display="none"
  // }
}
document.body.appendChild(contener);

const array = JSON.parse(localStorage.getItem("prodectarr"));
for (var i = 0; i < array.length; i++) {
  if (array[i]["count_of_prodct"] > 0) {
    createProductCard(
      array[i]["name"],
      array[i]["price"],
      array[i]["image"],
      array[i]["description"],
      array[i]["salesprice"],
      array[i]["count_of_prodct"]
    );
  }
}
// function createProductCard(_name, _price, _img, _desc, _sale_price,code) {
// name: _name,
// description: _desc,
// price: _price,
// image: _img,
// salesprice: _sale_price,
// offercode: code,
// count_of_prodct:0

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "./api/api.json");
// xmlhttp.send();
// xmlhttp.onreadystatechange = function () {
//     //   console.log(xmlhttp.readyState);
//     //   console.log(xmlhttp.status);
//   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//     var response = JSON.parse(xmlhttp.response).phones;
//     console.log(response); // print response
//     //   console.log(response.phones); // print response
//     //   console.log(response[0]["brand"]);
//     // console.log(response.phones.length);
//     // response.length
// };
