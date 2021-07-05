import {createOffers} from './offers.js';
import {createMapPins} from './pins.js';

const ENTER_KEYCODE = 13;

const fieldsets = document.querySelectorAll('.ad-form__element');
const elMap = document.querySelector('.map');
const elForm = document.querySelector('.ad-form');
const mainPin = document.querySelector('.map__pin--main');

const initMap = function () {
  elMap.classList.remove('map--faded');
  elForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < fieldsets.length; i++) {
    fieldsets[i].disabled = false;
  }

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
