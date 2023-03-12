import { testimonials } from './js/data';
import { Testimonial } from './js/Testimonial';
import { Modal } from './js/Modal';
import { TestimonialModal } from './js/TestimonialModal';

const wrapper = document.querySelector('.testimonials__wrapper');

window.onload = function () {
  if (testimonials) {
    clearTestimonialsWrapper();
    renderTestimonials(testimonials)
      .slice(0, 4)
      .map((el) => wrapper.append(el.createTestimonial()));

    addTestimonialsHandler();
  }
};

const clearTestimonialsWrapper = function () {
  wrapper.innerHTML = '';
  // return wrapper;
};

const renderTestimonials = function (data) {
  const testimonials = [];
  data.map((el) => {
    testimonials.push(new Testimonial(el));
  });
  // console.log(testimonials);
  return testimonials;
};

//MODAL

const addTestimonialsHandler = () => {
  document.querySelector('.testimonials__wrapper').addEventListener('click', (evt) => {
    if (evt.target.closest('.testimonial')) {
      let clickedId = evt.target.closest('.testimonial').getAttribute('data-id');
      let clickedTestimonialData = getClickedData(clickedId);
      // console.log(clickedId);
      renderModalTestimonial(clickedTestimonialData);
    }
  });
};

const getClickedData = (id) => {
  const res = testimonials.find((el) => el.id === Number(id));
  // console.log(testimonials);
  // console.log(id);
  // console.log(res);
  return res;
};

const renderModalTestimonial = function (testimonial) {
  let modal = new TestimonialModal('modal', testimonial);
  // console.log(modal);
  modal.renderModal();
};

//2.Карусель в блоке Testimonials для ширины экрана 1600px и 1000px.
//https://codepen.io/juanbrujo/pen/KKNGJX

// 11 отзывов
//диапазон значений от 0 до 7: 0, 1, 2, 3, 4, 5, 6, 7.

const range = () => {
  const elem = document.querySelector('input[type="range"]');
  elem.addEventListener('input', rangeValue);

  const rangeValue = function () {
    const newValue = elem.value;
    const target = document.querySelector('.value');
    target.innerHTML = newValue;
  };
};
