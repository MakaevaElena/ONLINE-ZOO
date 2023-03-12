const defaultPhoto = 'src/img\testimonialsman.png';

export class Testimonial {
  constructor({ id, userPhoto, userName, userLocation, day, text, ...rest }) {
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
    testimonial.className = 'testimonial';
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
    // console.log(testimonial);
    return testimonial;
  }
}
