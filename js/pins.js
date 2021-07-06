import {createMockData} from './data.js';
import {addElementToDom} from './utils.js';
import {showElement} from './utils.js';
const elMap = document.querySelector('.map');
const elMapPinsArea = elMap.querySelector('.map__pins');

const elPinTemplate = document.querySelector('#pin').content.querySelector('button');

const PIN_HEIGHT = 70;
const PIN_WIDTH = 50;
// const ESC_KEYCODE = 27;
// const ENTER_KEYCODE = 13;

// const onPopupEscPress = function(evt) {
//   if (evt.keyCode === ESC_KEYCODE) {
//     elOfferTemplate.classList.add('hidden');
//   }
// };


const createPinElement = function (pinData) {
  const elPin = elPinTemplate.cloneNode(true);

  elPin.style.left = `${pinData.location.x - PIN_WIDTH / 2  }px`;
  elPin.style.top = `${pinData.location.y + PIN_HEIGHT  }px`;

  const elMapPinImage = elPin.querySelector('img');
  if (elMapPinImage) {
    elMapPinImage.src = pinData.author.avatar;
    elMapPinImage.alt = pinData.offer.title;
  }

  //const pin = document.querySelector('.map__pin');
  elPin.addEventListener('click', () => {
    const t = window.offers.createOfferElement(pinData);
    showElement(t);
  });

  // elPin.addEventListener('click', () => {
  //   elOfferTemplate.classList.remove('hidden');
  //   //document.addEventListener('keydown', onPopupEscPress);
  // });

  // elPinTemplate.addEventListener('click', (evt) => {
  //   if (evt.keyCode === ENTER_KEYCODE) {
  //     elOfferTemplate.classList.remove('hidden');
  //     document.addEventListener('keydown', onPopupEscPress);
  //   }
  // });

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

