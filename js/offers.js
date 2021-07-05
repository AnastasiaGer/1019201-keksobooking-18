
import {createMockData} from './data.js';
import {addElementToDom} from './utils.js';

const elMap = document.querySelector('.map');
const elMapPinsArea = elMap.querySelector('.map__pins');
const elOfferTemplate = document.querySelector('#card').content.querySelector('article');


//const closeBtn = elOfferTemplate.querySelector('.popup__close');

const ESC_KEYCODE = 27;
//const ENTER_KEYCODE = 13;

const createOfferElement = function (offerTemplate, offerData) {
  const elOffer = offerTemplate.cloneNode(true);
  elOffer.querySelector('.popup__title').textContent = offerData.offer.title;
  elOffer.querySelector('.popup__text--address').textContent = offerData.offer.address;
  elOffer.querySelector('.popup__text--price').textContent = offerData.offer.price;
  elOffer.querySelector('.popup__type').textContent = offerData.offer.type;
  elOffer.querySelector('.popup__text--capacity').textContent = offerData.offer.rooms;
  elOffer.querySelector('.popup__text--capacity').textContent = offerData.offer.guests;
  elOffer.querySelector('.popup__text--time').textContent = offerData.offer.checkin;
  elOffer.querySelector('.popup__text--time').textContent = offerData.offer.checkout;
  elOffer.querySelector('.popup__features').textContent = offerData.offer.features;
  elOffer.querySelector('.popup__description').textContent = offerData.offer.description;
  elOffer.querySelector('.popup__photo').src = offerData.offer.photos;

  const elOfferImage = elOffer.querySelector('img');
  if (elOfferImage) {
    elOfferImage.src = offerData.author.avatar;
  }

  return elOffer;
};

const createOffers = function () {
  const arrMockData = createMockData();

  if (elMapPinsArea && elOfferTemplate) {
    for (let i = 0; i < arrMockData.length; i++) {
      addElementToDom(elMapPinsArea, createOfferElement(elOfferTemplate, arrMockData[i]));
    }
  }

  return arrMockData;
};

//const elPinTemplate = document.querySelector('#pin').content.querySelector('button');

const onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    elOfferTemplate.classList.add('hidden');
  }
};

const openPopup = function() {
  const offer = document.querySelector('article');
  offer.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function() {
  const offer = document.querySelector('article');

  offer.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// elPinTemplate.forEach((button) =>
//   button.addEventListener('click', openPopup),
// );


// elPinTemplate.addEventListener('click', (evt) => {
//   if (evt.keyCode === ENTER_KEYCODE) {
//     openPopup();
//   }
// });


window.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.map__card');

  if (isOutside) {
    closePopup();
  }
});

// closeBtn.addEventListener('keydown', (evt) => {
//   if (evt.keyCode === ENTER_KEYCODE) {
//     closePopup();
//   }
// });

export { createOfferElement };
export { createOffers };
