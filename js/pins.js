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
  const elMapPinImage = elPin.querySelector('img');
  if (elMapPinImage) {
    elMapPinImage.src = pinData.author.avatar;
    elMapPinImage.alt = pinData.offer.title;
  }

  return elPin;
};

const createMapPins = function () {
  const arrMockData = createMockData();

  if (elMapPinsArea && elPinTemplate) {
    for (let i = 0; i < arrMockData.length; i++) {
      addElementToDom(elMapPinsArea, createPinElement(arrMockData[i]));
    }
  }
};


export { createMapPins };

