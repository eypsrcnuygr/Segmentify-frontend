import $ from 'jquery';

const Sliding = () => {
  let i = 2;
  const next = document.body.querySelector('.next');
  next.addEventListener('click', () => {
    if (i < document.querySelectorAll('.card').length - 1) {
      $('.card:not(.d-none)')[0].classList.add('d-none');
      $('.card')[i += 1].classList.remove('d-none');
    } else {
      i = 2;
      document.body.querySelectorAll('.card')[0].classList.remove('d-none');
      document.body.querySelectorAll('.card')[1].classList.remove('d-none');
      document.body.querySelectorAll('.card')[2].classList.remove('d-none');
      $('.card')[$('.card').length - 1].classList.add('d-none');
      $('.card')[$('.card').length - 2].classList.add('d-none');
      $('.card')[$('.card').length - 3].classList.add('d-none');
    }
  });
};

export default Sliding;