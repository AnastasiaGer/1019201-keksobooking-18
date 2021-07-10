import {createMockData} from './data.js';
import {addElementToDom} from './utils.js';

const elMap = document.querySelector('.map');
const elMapPinsArea = elMap.querySelector('.map__pins');

const elPinTemplate = document.querySelector('#pin').content.querySelector('button');

const PIN_HEIGHT = 70;
const PIN_WIDTH = 50;

const createPinElement = function (pinData) {
  const elPin = elPinTemplate.cloneNode(true);

  elPin.style.left = `${pinData.location.x - PIN_WIDTH / 2  }px`;
  elPin.style.top = `${pinData.location.y + PIN_HEIGHT  }px`;
  elPin.id = pinData.offer.id;
  elPin.setAttribute('data-type', pinData.offer.type);
  elPin.setAttribute('data-price', pinData.offer.price);
  elPin.setAttribute('data-rooms', pinData.offer.rooms);
  elPin.setAttribute('data-guests', pinData.offer.guests);
  elPin.setAttribute('data-features', pinData.offer.features);
  const elMapPinImage = elPin.querySelector('img');
  if (elMapPinImage) {
    elMapPinImage.src = pinData.author.avatar;
    elMapPinImage.alt = pinData.offer.title;
  }

  return elPin;
};

// const mapFilters = document.querySelector('.map__filters');
// const housingType = mapFilters.querySelector('#housing-type');
// const housingPrice = mapFilters.querySelector('#housing-price');
// const housingRooms = mapFilters.querySelector('#housing-rooms');
// const housingGuests = mapFilters.querySelector('#housing-guests');
// const housingFeatures = mapFilters.querySelector('#housing-features');

const createMapPins = function () {
  const arrMockData = createMockData();

  if (elMapPinsArea && elPinTemplate) {
    for (let i = 0; i < arrMockData.length; i++) {
      addElementToDom(elMapPinsArea, createPinElement(arrMockData[i]));
    }
  }
};

export { createMapPins };
