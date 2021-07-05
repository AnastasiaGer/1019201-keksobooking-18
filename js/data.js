import {generateRandomNumber} from './utils.js';
import {getArrayRandomLength} from './utils.js';
const elMap = document.querySelector('.map');
const maxX = elMap.offsetWidth;
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


export { createMockData };
