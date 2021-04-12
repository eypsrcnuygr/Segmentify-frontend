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
          li.innerHTML = element.productId;
          div.appendChild(li);
        });
        document.body.appendChild(div);
      }));
};

export default contentFetcher;