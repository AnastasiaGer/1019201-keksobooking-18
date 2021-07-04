
import {createMockData} from './data.js';
import {addElementToDom} from './utils.js';

const elMap = document.querySelector('.map');
const elMapPinsArea = elMap.querySelector('.map__pins');
const elOfferTemplate = document.querySelector('#card').content.querySelector('article');

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
};

export { createOfferElement };
export { createOffers };
