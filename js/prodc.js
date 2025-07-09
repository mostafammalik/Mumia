var cartcontent = [{}];

function calculatePercentageDiscount(originalPrice, discountedPrice) {
  if (originalPrice === 0) {
    return 0;
  }
  let discount = originalPrice - discountedPrice;
  let percentageDiscount = (discount / originalPrice) * 100;
  return percentageDiscount;
}

var contener = document.createElement("section");
// contener.style.display = "flex";
// contener.style.width = "95%";
// contener.style.marginBlock = "10px";
contener.style.margin = "0 35px";
// contener.style.paddingInline = "25px";
// contener.style.backgroundColor = "lightgray"
// contener.style.backgroundColor = "#fbd290"
contener.style.display = "inline-block";
// contener.style.position="flex"

var cont = 0;

function createProductCard(
  _name,
  _price,
  _img,
  image_keys,
  _desc,
  _sale_price,
  code,
  _plp_specifications
) {
  var obj = {
    name: _name,
    description: _desc,
    price: _price,
    image: _img,
    images: image_keys,
    salesprice: _sale_price,
    offercode: code,
    count_of_prodct: 0,
    plp_specifications: _plp_specifications,
  };

  cartcontent.push(obj);
  // Create the card div
  var card = document.createElement("div");
  card.style.display = "inline-block";
  // card.style.margin = "30px";
  // card.style.display = "flex";
  // card.style.backgroundColor = "#dae0eb";
  // card.classList.add("card");
  card.className = "card";
  card.style.marginInline = "15px";
  card.style.paddingInline = "10px";
  card.style.marginBlock = "15px";
  // card.style.height = "600px";

  card.style.border = "1px solid gray";
  card.style.borderRadius = "15px";

  card.onclick = function () {
    // alert(product.id + " added to cart");
    // var items = JSON.parse(localStorage.getItem("product"));
    console.log(JSON.stringify(obj));
    var x = JSON.stringify(obj);
    console.log("HERE");
    localStorage.setItem(`singleproduct`, x);
  };
  // localStorage.setItem("counter", `${counter}`);
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

  var ratingText = document.createElement("P");
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
  cartButton.style.transition = "1s linear";
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
  var allproducts = document.getElementById("allproducts");
  contener.appendChild(card);
  allproducts.appendChild(contener);

  var x, y;
  cartButton.onclick = function () {
    cont++;
    for (let i = 0; i < 44; i++) {
      if (code == cartcontent[i].offercode) {
        // console.log(cartcontent[i].description);
        x = cartcontent[i].count_of_prodct;
        //  console.log( cartcontent[i+1].count_of_prodct);
        cartcontent[i].count_of_prodct = ++x;
        // console.log(x);
      }
    }
    // window.location = './Cart.html';
    var crtnum = document.getElementById("cart-number");
    crtnum.style.marginLeft = "4px";
    crtnum.innerHTML = `${cont}`;
    localStorage.setItem("prodectarr", JSON.stringify(cartcontent));
  };
  function SendProductDataToPoduct_details_page(_name, _price, _brand) {
    var product = {};
    product.name = _name;
    product.price = _price;
    product.brand = _brand;
    localStorage.setItem("product", product);
  }
  card.onmousemove = function () {
    SendProductDataToPoduct_details_page("new", "new", "new");
    card.style.boxShadow = "5px 5px 5px gray";

    cartButton.style.display = "block";
  };
  card.onmouseleave = function () {
    card.style.boxShadow = "none";
    card.style.transition = "0.5s linear";

    card.style.transform = "scale(1)";
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    cartButton.style.display = "none";
  };
  productImage.onclick = function () {
    for (let i = 0; i < 44; i++) {
      if (code == cartcontent[i].offercode) {
        y = cartcontent[i].offercode;
        //  console.log( cartcontent[i+1].count_of_prodct); transition
        cartcontent[i].count_of_prodct = ++x;
        // console.log(x);
      }
    }
    window.location = "../html/product-detail.html";
  };
}
document.body.appendChild(contener);

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "../apis/api.json");
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  console.log(xmlhttp.readyState);
  console.log(xmlhttp.status);
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var response = JSON.parse(xmlhttp.response).phones;
    // console.log(response.phones); // print response
    // console.log(response.phones.length);
    // response.length
    console.log(
      "----------------------------------images key ------------------------------------------"
    );
    console.log(response[0]["plp_specifications"]);
    console.log(
      "----------------------------------images key ------------------------------------------"
    );
    for (var i = 0; i < response.length; i++) {
      if (i == 5 || i == 34 || i == 35 || i == 36 || i == 38 || i == 42) {
        continue;
      } else {
        var temp = response[i]["image_keys"];

        createProductCard(
          response[i]["brand"],
          response[i]["price"],
          response[i]["image_key"],
          temp,
          response[i]["name"],
          response[i]["sale_price"],
          response[i]["offer_code"]
        );
      }
      // console.log(response[i]["brand"]);
    }
  }
};
