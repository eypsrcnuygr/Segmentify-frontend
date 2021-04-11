import './index.scss';

const domContentCreator = () => {
  const div = document.createElement('div');
  div.id = 'container';
  div.innerHTML = 'Hi from JS!';
  div.className = 'purple-font';

  document.body.appendChild(div);
};

domContentCreator();