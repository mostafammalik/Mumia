function createProductCard(_name, _price, _img, _desc, _sale_price) {

const productCard = document.createElement('div');
productCard.classList.add('product-card');

const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

const image = document.createElement('img');
image.src = `${_img}`; // Replace with your image URL
imageContainer.appendChild(image);

const detailsContainer = document.createElement('div');
detailsContainer.classList.add('details-container');

const title = document.createElement('h3');
title.textContent = 'AL DOHA Egyptian White Rice 1kg';

const rating = document.createElement('div');
rating.classList.add('rating');
rating.innerHTML = '4.5 <span class="star">★</span> (613)';

const priceContainer = document.createElement('div');
priceContainer.classList.add('price-container');

const currentPrice = document.createElement('span');
currentPrice.textContent = 'EGP 35.25';

const originalPrice = document.createElement('span');
originalPrice.textContent = '49.95';
originalPrice.classList.add('original-price');

const discount = document.createElement('span');
discount.textContent = '29% OFF';
discount.classList.add('discount');

priceContainer.appendChild(currentPrice);
priceContainer.appendChild(originalPrice);
priceContainer.appendChild(discount);

const delivery = document.createElement('div');
delivery.classList.add('delivery');
delivery.innerHTML = '<span class="truck">🚚</span> Free Delivery';

const button = document.createElement('button');
button.textContent = 'Add to Cart';

detailsContainer.appendChild(title);
detailsContainer.appendChild(rating);
detailsContainer.appendChild(priceContainer);
detailsContainer.appendChild(delivery);
detailsContainer.appendChild(button);

productCard.appendChild(imageContainer);
productCard.appendChild(detailsContainer);

document.body.appendChild(productCard);

// Add CSS styles for the card
const style = document.createElement('style');
style.textContent = `
  .product-card {
    width: 250px;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 5px;
  }

  .image-container img {
    width: 100%;
    height: auto;
  }

  .details-container {
    padding: 10px;
  }

  h3 {
    margin-bottom: 5px;
  }

  .rating {
    font-size: 12px;
    color: #888;
  }

  .star {
    color: #f9c105;
  }

  .price-container {
    margin-bottom: 5px;
  }

  .original-price {
    text-decoration: line-through;
    color: #888;
    margin-right: 5px;
  }

  .discount {
    color: #00b050;
    font-weight: bold;
  }

  .delivery {
    font-size: 12px;
    color: #888;
    margin-bottom: 10px;
  }

  .truck {
    margin-right: 5px;
  }

  button {
    background-color: #00b050;
    color: #fff;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);
}