'use strict';

var AVATARS_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08'];
var MAX_LOCATION_INT = 1200;
var Price = {
  MAX_PRICE: 2000,
  MIN_PRICE: 400
};
var HOUSE_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var MAX_ROOMS_QUANTITY = 4;
var MAX_GUESTS_QUANTITY = 8;
var CHECK_IN = ['12:00', '13:00', '14:00'];
var CHECK_OUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var MAX_PHOTOS = 3;
var MAX_Y = 600;
var MIN_Y = 130;
var MIN_X = 0;
var PIN_HEIGHT = 70;
var PIN_WIDTH = 50;
var PINS_QUANTITY = 8;

var maxX;

var initMap = function () {
  elMap.classList.remove('map--faded');
  maxX = elMap.offsetWidth;
};

var generateRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getApartmentsFeatures = function () {
  var result = [];

  var featuresQuantity = generateRandomNumber(FEATURES.length, 1);

  for (var i = 0; i < featuresQuantity; i++) {
    result.push(FEATURES[i]);
  }

  return result;
};

var getApartmentImages = function () {
  var result = [];

  var imagesQuantity = generateRandomNumber(MAX_PHOTOS, 1);

  for (var i = 1; i <= imagesQuantity; i++) {
    result.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
  }

  return result;
};

var createMockData = function () {
  var arrResult = [];

  for (var i = 0; i < PINS_QUANTITY; i++) {
    arrResult.push({
      'author': {
        'avatar': 'img/avatars/user' + AVATARS_NUMBER[i] + '.png'
      },

      'offer': {
        'title': 'Предложение ' + (i + 1),
        'address': generateRandomNumber(MAX_LOCATION_INT, 0) + ', ' + generateRandomNumber(MAX_LOCATION_INT, 0),
        'price': generateRandomNumber(Price.MAX_PRICE, Price.MIN_PRICE),
        'type': HOUSE_TYPE[generateRandomNumber(HOUSE_TYPE.length, 0)],
        'rooms': generateRandomNumber(MAX_ROOMS_QUANTITY, 1),
        'guests': generateRandomNumber(MAX_GUESTS_QUANTITY, 0),
        'checkin': CHECK_IN[generateRandomNumber(CHECK_IN.length, 0)],
        'checkout': CHECK_OUT[generateRandomNumber(CHECK_OUT.length, 0)],
        'features': getApartmentsFeatures(),
        'description': 'Описание ' + (i + 1),
        'photos': getApartmentImages()
      },

      'location': {
        'x': generateRandomNumber(maxX - PIN_WIDTH, MIN_X + PIN_WIDTH),
        'y': generateRandomNumber(MAX_Y - PIN_HEIGHT, MIN_Y)
      }
    });
  }

  return arrResult;
};

var addElementToDom = function (parentElement, childElement) {
  parentElement.appendChild(childElement);
};

var createPinElement = function (pinTemplate, pinData) {
  var elPin = pinTemplate.cloneNode(true);

  elPin.style.left = (pinData.location.x - PIN_WIDTH / 2) + 'px';
  elPin.style.top = (pinData.location.y + PIN_HEIGHT) + 'px';

  var elMapPinImage = elPin.querySelector('img');
  if (elMapPinImage) {
    elMapPinImage.src = pinData.author.avatar;
    elMapPinImage.alt = pinData.offer.title;
  }

  return elPin;
};

var createMapPins = function () {
  var arrMockData = createMockData();

  var elMapPinsArea = elMap.querySelector('.map__pins');
  var elPinTemplate = document.querySelector('#pin').content.querySelector('button');

  if (elMapPinsArea && elPinTemplate) {
    for (var i = 0; i < arrMockData.length; i++) {
      addElementToDom(elMapPinsArea, createPinElement(elPinTemplate, arrMockData[i]));
    }
  }
};

var elMap = document.querySelector('.map');

if (elMap) {
  initMap();
  createMapPins();
}
