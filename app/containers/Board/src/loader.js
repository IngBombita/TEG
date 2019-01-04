import * as Noroeste from './polygons/Noroeste.json';
import * as Noreste from './polygons/Noreste.json';
import * as Centro from './polygons/Centro.json';
import * as Cuyo from './polygons/Cuyo.json';
import * as Patagonia from './polygons/Patagonia.json';

const makeProvincesAreas = () => {
  const array = [];

  array.push(Noroeste.default);
  array.push(Noreste.default);
  array.push(Centro.default);
  array.push(Cuyo.default);
  array.push(Patagonia.default);

  return array;
};

const makeProvincesPolygons = areas => {
  let provinces = {};

  for (let i = 0; i < areas.length; i += 1) {
    provinces = { ...provinces, ...areas[i] };
  }

  provinces = Object.entries(provinces);

  const map = {
    name: 'Provinces',
    areas: [],
  };
  for (let index = 0; index < provinces.length; index += 1) {
    const province = provinces[index];
    const objProvince = {
      name: province[0],
      shape: 'poly',
      coords: province[1],
    };
    map.areas[index] = objProvince;
  }
  return map;
};

const loadProvincesPolygons = () => makeProvincesPolygons(makeProvincesAreas());
export default loadProvincesPolygons;
