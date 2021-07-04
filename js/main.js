import {createOffers} from './offers.js';
import {createMapPins} from './pins.js';

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;
//let maxX;

const elMap = document.querySelector('.map');
const elForm = document.querySelector('.ad-form');
const mainPin = document.querySelector('.map__pin--main');
//const elMapPinsArea = elMap.querySelector('.map__pins');
const elPinTemplate = document.querySelector('#pin').content.querySelector('button');
const offerTemplate = document.querySelector('#card').content.querySelector('article');
const closeBtn = offerTemplate.querySelector('.popup__close');


const initMap = function () {
  elMap.classList.remove('map--faded');
  elForm.classList.remove('ad-form--disabled');
  //maxX = elMap.offsetWidth;

  createMapPins();
  createOffers();
};

mainPin.addEventListener('mousedown', initMap);
mainPin.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    elMap.classList.remove('map--faded');
    elForm.classList.remove('ad-form--disabled');
  }
});

const onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    offerTemplate.classList.add('hidden');
  }
};

const openPopup = function() {
  offerTemplate.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function() {
  offerTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

elPinTemplate.addEventListener('click', () => {
  openPopup();
});

elPinTemplate.addEventListener('click', (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

closeBtn.addEventListener('click', closePopup);

closeBtn.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
