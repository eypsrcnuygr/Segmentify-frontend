/* eslint-disable no-unused-expressions */
import '../assets/index.scss';
import contentConstructor from './ContentConstructor';

const contentFetcher = async () => {
  const decoder = new TextDecoder('utf-8');
  let splittedText = null;
  fetch('sample_products.txt')
    .then(response => response.body)
    .then(body => body.getReader().read()
      .then(chunk => decoder.decode(chunk.value))
      .then((text) => {
        splittedText = text.split('\r\n').map((el) => el.split('= '));
        Object.values(JSON.parse(splittedText[0][1])).forEach(element => {
          contentConstructor(element);
        });
      }));
};

export default contentFetcher;