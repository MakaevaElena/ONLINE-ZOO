import { Modal } from './Modal';

export class TestimonialModal extends Modal {
  constructor(classes, { id, userPhoto, userName, userLocation, day, text, ...rest }) {
    super(classes);
    this.id = id;
    this.userPhoto = userPhoto;
    this.userName = userName;
    this.userLocation = userLocation;
    this.day = day;
    this.text = text;
  }

  createTestimonial() {
    let template = '';
    const testimonial = document.createElement('div');
    testimonial.className = 'testimonial modal__testimonial';
    testimonial.setAttribute('data-id', this.id);

    const createUserPhotoTemplate = (photo) => `<img src=${photo} alt="${this.userName}" />`;

    template += `<div class="user-info">
    <div class="testimonial__icon">
      <span class="user-photo user-photo__${this.userName}">

        ${
          this.userPhoto
            ? createUserPhotoTemplate(this.userPhoto)
            : createUserPhotoTemplate(defaultPhoto)
        }

      </span>
    </div>
    <div class="user-info__right">
      <h5>${this.userName}</h5>
      <span>${this.userLocation}</span>
      &middot;
      <span>${this.day}</span>
    </div>
  </div>
  <p class="small-paragraf">${this.text}</p>`;

    testimonial.innerHTML = template;
    return testimonial;
  }

  renderModal() {
    let content = this.createTestimonial();
    // console.log(content);
    super.buildModal(content);
  }
}
