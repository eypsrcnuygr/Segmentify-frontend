/* eslint-disable no-unused-expressions */
import discountCalculator from './DiscountCalculator';
import '../index.scss';

const contentFetcher = async () => {
  const decoder = new TextDecoder('utf-8');
  let splittedText = null;
  const div = document.createElement('div');
  fetch('sample_products.txt')
    .then(response => response.body)
    .then(body => body.getReader().read()
      .then(chunk => decoder.decode(chunk.value))
      .then((text) => {
        splittedText = text.split('\r\n').map((el) => el.split('= '));
        Object.values(JSON.parse(splittedText[0][1])).forEach(element => {
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
          price.innerHTML = element.price;
          oldPrice.innerHTML = element.oldPrice;
          name.innerHTML = element.name;
          basePrice.innerHTML = element.params.basePrice;
          categories.innerHTML = element.categories.map(item => item);
          div.appendChild(name);
          div.appendChild(discount);
          div.appendChild(stars);
          ratings ? spanContainer.appendChild(ratings) : null;
          spanContainer ? div.appendChild(spanContainer) : null;
          div.appendChild(image);
          div.appendChild(categories);
          div.appendChild(price);
          element.oldPrice ? div.appendChild(oldPrice) : null;
          div.appendChild(basePrice);
          div.appendChild(li);
        });
        document.body.appendChild(div);
      }));
};

export default contentFetcher;