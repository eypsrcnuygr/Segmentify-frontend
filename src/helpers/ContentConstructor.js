/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import discountCalculator from './DiscountCalculator';

const contentConstructor = (element) => {
  const div = document.createElement('div');
  const heartSpan = document.createElement('span');
  const categoriesContainer = document.createElement('div');
  const priceContainer = document.createElement('div');
  const li = document.createElement('li');
  const image = document.createElement('img');
  const name = document.createElement('p');
  const discount = document.createElement('p');
  const categories = document.createElement('p');
  const spanContainer = document.createElement('div');
  const stars = document.createElement('div');
  const price = document.createElement('div');
  const oldPrice = document.createElement('div');
  const basePrice = document.createElement('div');
  const myDiscountVar = discountCalculator(element.oldPrice, element.price);
  discount.innerHTML = myDiscountVar !== 0 ? `-% ${Math.floor(myDiscountVar)}` : '';
  stars.innerHTML = element.params.stars;
  stars.setAttribute('class', 'd-none');
  const ratings = stars.querySelector('.rating--count');
  image.src = element.image;
  li.innerHTML = element.productId;
  price.innerHTML = `${element.price} €`;
  oldPrice.innerHTML = `${element.oldPrice} €`;
  name.innerHTML = element.name;
  basePrice.innerHTML = element.params.basePrice;
  categories.innerHTML = element.categories.map(item => item);
  heartSpan.innerHTML = '&#128151';
  div.appendChild(name);
  div.appendChild(discount);
  div.appendChild(stars);
  ratings ? spanContainer.appendChild(ratings) : null;
  ratings ? spanContainer.appendChild(heartSpan) : null;
  spanContainer ? div.appendChild(spanContainer) : null;
  div.appendChild(image);
  categoriesContainer.appendChild(categories);
  div.appendChild(categoriesContainer);
  priceContainer.appendChild(price);
  element.oldPrice ? priceContainer.appendChild(oldPrice) : null;
  div.appendChild(priceContainer);
  div.appendChild(basePrice);
  div.appendChild(li);
  div.setAttribute('class', 'card fade');
  discount.setAttribute('class', 'left-corner-span');
  categoriesContainer.setAttribute('class', 'categories-container');
  priceContainer.setAttribute('class', 'price-container-flex');
  price.setAttribute('class', 'price');
  oldPrice.setAttribute('class', 'old-price');
  spanContainer.setAttribute('class', 'likes');
  document.body.appendChild(div);
  const x = document.body.querySelectorAll('.card');
  for (let i = 3; i < x.length; i++) {
    x[i].classList.add('d-none');
  }
};

export default contentConstructor;