import {addElementToDom} from './utils.js';
import {createMockData} from './data.js';

const PIN_HEIGHT = 70;
const PIN_WIDTH = 50;

const elMap = document.querySelector('.map');
const elMapPinsArea = elMap.querySelector('.map__pins');
const elPinTemplate = document.querySelector('#pin').content.querySelector('button');

const createPinElement = function (pinTemplate, pinData) {
  const elPin = pinTemplate.cloneNode(true);

  elPin.style.left = `${pinData.location.x - PIN_WIDTH / 2  }px`;
  elPin.style.top = `${pinData.location.y + PIN_HEIGHT  }px`;

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
      addElementToDom(elMapPinsArea, createPinElement(elPinTemplate, arrMockData[i]));
    }
  }
  return arrMockData;
};


export { createMapPins };
export { createPinElement };
