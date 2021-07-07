import {hideElement} from './utils.js';

import {createMockData} from './data.js';
import {addElementToDom} from './utils.js';

const elOfferTemplate = document.querySelector('#card').content.querySelector('article');
const mapPins = document.querySelector('.map__pins');
//const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

// const onPopupEscPress = function(evt) {
//   if (evt.keyCode === ESC_KEYCODE) {
//     elOfferTemplate.classList.add('hidden');
//   }
// };

const createOfferElement = function (arrResult) {
  const elOffer = elOfferTemplate.cloneNode(true);

  elOffer.setAttribute('aria-labelledby', arrResult.offer.id);
  elOffer.querySelector('.popup__title').textContent = arrResult.offer.title;
  elOffer.querySelector('.popup__title').textContent = arrResult.offer.title;
  elOffer.querySelector('.popup__text--address').textContent = arrResult.offer.address;
  elOffer.querySelector('.popup__text--price').textContent = arrResult.offer.price;
  elOffer.querySelector('.popup__type').textContent = arrResult.offer.type;
  elOffer.querySelector('.popup__text--capacity').textContent = arrResult.offer.rooms;
  elOffer.querySelector('.popup__text--capacity').textContent = arrResult.offer.guests;
  elOffer.querySelector('.popup__text--time').textContent = arrResult.offer.checkin;
  elOffer.querySelector('.popup__text--time').textContent = arrResult.offer.checkout;
  elOffer.querySelector('.popup__features').textContent = arrResult.offer.features;
  elOffer.querySelector('.popup__description').textContent = arrResult.offer.description;
  elOffer.querySelector('.popup__photo').src = arrResult.offer.photos;

  const elOfferImage = elOffer.querySelector('img');
  if (elOfferImage) {
    elOfferImage.src = arrResult.author.avatar;
  }
  const elOfferBtn = elOffer.querySelector('button');

  elOfferBtn.addEventListener('click', () => {
    hideElement(elOffer);
    //document.removeEventListener('keydown', onPopupEscPress);
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ENTER_KEYCODE) {
      hideElement(elOffer);
      // document.removeEventListener('keydown', onPopupEscPress);
    }
  });

  return elOffer;
};

const createOffers = function () {
  const arrMockData = createMockData();
  for (let i = 0; i < arrMockData.length; i++) {
    addElementToDom(mapPins, createOfferElement(arrMockData[i]));
  }
};

export { createOffers };

window.offers = {
  createOfferElement: createOfferElement,
  createOffers: createOffers,
};
