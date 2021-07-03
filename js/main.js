
const AVATARS_NUMBER = ['01', '02', '03', '04', '05', '06', '07', '08'];
const MAX_LOCATION_INT = 1200;
const Price = {
  MAX_PRICE: 2000,
  MIN_PRICE: 400,
};

const TITLES = [
  'Огромный дворец',
  'Маленькая уютная квартира',
  'Красивый дом',
  'Уютное бунгало',
  'Уютный номер',
];

const DESCRIPTIONS = [
  'Можно дышать свежим воздухом не вдыхая смог проезжающего автотранспорта благодаря тому, что окна квартиры выходят на парк.',
  'Отсутствует проблема с парковкой. Всегда свободные парковочные места, можно удобно припарковаться рядом с домом.',
  'Улучшенная планировка и большая площадь. 44 кв.м. общей площади и 9 метровая кухня это гораздо больше, чем в стандартной 1-комнатной квартире.',
  'Мечтаете жить во дворце? Разрешите предложить Вам варианты лучше',
  'Генеральские дачи. Открывайте новый формат коллекционной недвижимости',
  'Квартира в 2-х уровнях, практически свой дом. 100 квадратных метров света и уюта. Живите и радуйтесь жизни в лучах солнца.',
  '2 ванны — это так удобно',
  'Квартира в 2-х уровнях, практически свой дом. Хотите что бы Вам завидовали?!',
  'Захватывающее ощущение раскрепощенности и легкости',
  'Каждый уголок квартиры освещен светом добра и любви',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const HOUSE_TYPE = ['palace', 'flat', 'house', 'bungalo'];
const MAX_ROOMS_QUANTITY = 4;
const MAX_GUESTS_QUANTITY = 8;
const CHECK_IN = ['12:00', '13:00', '14:00'];
const CHECK_OUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const MAX_Y = 600;
const MIN_Y = 130;
const MIN_X = 0;
const PIN_HEIGHT = 70;
const PIN_WIDTH = 50;
const PINS_QUANTITY = 8;

let maxX;

const elMap = document.querySelector('.map');
const elForm = document.querySelector('.ad-form');

const generateRandomNumber = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

const getApartmentsFeatures = function () {
  const result = [];

  const featuresQuantity = generateRandomNumber(FEATURES.length, 1);

  for (let i = 0; i < featuresQuantity; i++) {
    result.push(FEATURES[i]);
  }

  return result;
};

// var getApartmentImages = function () {
//   var result = [];

//   var imagesQuantity = generateRandomNumber(MAX_PHOTOS, 1);

//   for (var i = 1; i <= imagesQuantity; i++) {
//     result.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
//   }

//   return result;
// };

// Получение массива случайной длины из другого массива
const getArrayRandomLength = function (someArray) {
  const someIndexArray = generateRandomNumber(1, someArray.length); // Получение рандомного индекса элемента массива
  const newRandomArray = [];
  for (let i = 0; i < someIndexArray; i++) {
    newRandomArray.push(someArray[i]);
  }
  return newRandomArray;
};
const createMockData = function () {
  const arrResult = [];

  for (let i = 0; i < PINS_QUANTITY; i++) {
    arrResult.push({
      'author': {
        'avatar': `img/avatars/user${  AVATARS_NUMBER[i]  }.png`,
      },

      'offer': {
        'title': TITLES[generateRandomNumber(TITLES.length, 0)],
        'address': `${generateRandomNumber(MAX_LOCATION_INT, 0)  }, ${  generateRandomNumber(MAX_LOCATION_INT, 0)}`,
        'price': generateRandomNumber(Price.MAX_PRICE, Price.MIN_PRICE),
        'type': HOUSE_TYPE[generateRandomNumber(HOUSE_TYPE.length, 0)],
        'rooms': generateRandomNumber(MAX_ROOMS_QUANTITY, 1),
        'guests': generateRandomNumber(MAX_GUESTS_QUANTITY, 0),
        'checkin': CHECK_IN[generateRandomNumber(CHECK_IN.length, 0)],
        'checkout': CHECK_OUT[generateRandomNumber(CHECK_OUT.length, 0)],
        'features': getApartmentsFeatures(),
        'description': DESCRIPTIONS[generateRandomNumber(DESCRIPTIONS.length, 0)],
        'photos': `${getArrayRandomLength(PHOTOS).join(', ')}`,
      },

      'location': {
        'x': generateRandomNumber(maxX - PIN_WIDTH, MIN_X + PIN_WIDTH),
        'y': generateRandomNumber(MAX_Y - PIN_HEIGHT, MIN_Y),
      },
    });
  }

  return arrResult;
};

const addElementToDom = function (parentElement, childElement) {
  parentElement.appendChild(childElement);
};

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

  const elMapPinsArea = elMap.querySelector('.map__pins');
  const elPinTemplate = document.querySelector('#pin').content.querySelector('button');

  if (elMapPinsArea && elPinTemplate) {
    for (let i = 0; i < arrMockData.length; i++) {
      addElementToDom(elMapPinsArea, createPinElement(elPinTemplate, arrMockData[i]));
    }
  }
};

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

  const elMapPinsArea = elMap.querySelector('.map__pins');
  const offerTemplate = document.querySelector('#card')
    .content
    .querySelector('.map__card');
  // offerTemplate.classList.add('hidden');

  if (elMapPinsArea && offerTemplate) {
    for (let i = 0; i < arrMockData.length; i++) {
      addElementToDom(elMapPinsArea, createOfferElement(offerTemplate, arrMockData[i]));
    }
  }
};

const initMap = function () {
  elMap.classList.remove('map--faded');
  elForm.classList.remove('ad-form--disabled');
  maxX = elMap.offsetWidth;
};

const mainPin = document.querySelector('.map__pin--main');

mainPin.addEventListener('mousedown', initMap);
mainPin.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    elMap.classList.remove('map--faded');
    elForm.classList.remove('ad-form--disabled');
  }
});

// if (elMap) {
//   createMapPins();
//   createOffers();
// }


// var pins = document.querySelectorAll('.map__pin');
// var offerTemplate = document.querySelector('#card')

// var pinHandler = () => {
//   offerTemplate.classList.remove('hidden')
// }

// pins.forEach(pin => pin.addEventListener('click', pinHandler))
