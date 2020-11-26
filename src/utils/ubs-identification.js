import { booleanContains, point } from '@turf/turf';
import shapeAgc from '../resource/shpAgc.json';
import shapeTag from '../resource/shpTag.json';
import shapeRec from '../resource/shpRec.json';
import shapeVic from '../resource/shpVic.json';
import shapeSam from '../resource/shpSam.json';

import Ubs from '../app/models/Ubs';

export default async function identification(coord) {
  const coordP = point([coord.lng, coord.lat]);
  const shapes = [shapeAgc, shapeTag, shapeRec, shapeVic, shapeSam];
  let city;
  let ubs_identification;

  shapes.forEach((shape) => {
    shape.features.forEach((feature) => {
      if (booleanContains(feature.geometry, coordP)) {
        city = feature.UBS.slice(-3);
        ubs_identification = feature.UBS.slice(-6, -4);
      }
    });
  });
  switch (city) {
    case 'SAM':
      city = 'Samambaia';
      break;
    case 'TAG':
      city = 'Taguatinga';
      break;
    case 'VCP':
      city = 'Vicente Pires';
      break;
    case 'AGC':
      city = 'Águas Claras';
      break;
    case 'REC':
      city = 'Recanto das Emas';
      break;
    default:
      city = null;
  }

  ubs_identification = Number(ubs_identification);

  const { id } = await Ubs.findOne({
    where: { ubs_identification, city },
  });

  return id;
}
