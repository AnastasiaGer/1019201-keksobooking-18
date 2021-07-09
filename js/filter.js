import {createMockData} from './data.js';

// const mapFilters = document.querySelector('.map__filters');
// const housingType = mapFilters.querySelector('#housing-type');
// const housingPrice = mapFilters.querySelector('#housing-price');
// const housingRooms = mapFilters.querySelector('#housing-rooms');
// const housingGuests = mapFilters.querySelector('#housing-guests');
// const housingFeatures = mapFilters.querySelector('#housing-features');

const createFilter = function () {
  const arrMockData = createMockData();
  const f = arrMockData.filter((el)=> el.offer.type === 'bungalo',
  );
  return f;
};


createFilter();

