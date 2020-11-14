import LocalImage from '../assets/images/LocalImage';
import HomeModel from '../models/HomeModel';
import niceColors from '../constants/collorpallet.json';

const colors = [
  ...niceColors[2].slice(1, niceColors[1].length),
  ...niceColors[55].slice(0, 3),
];

const HOME_DATA = [
  new HomeModel(
    '1',
    'Dogs',
    'You can see all the dogs available here',
    LocalImage.dogs,
    'Dog',
    colors[1 % colors.length],
  ),
  new HomeModel(
    '2',
    'Game',
    'Guess what breed of dog is shown in the picture',
    LocalImage.games,
    'Game',
    colors[2 % colors.length],
  ),
  new HomeModel(
    '3',
    'Setting',
    'Changing the settings according to your preferences',
    LocalImage.settings,
    'Setting',
    colors[3 % colors.length],
  ),
];

export default HOME_DATA;
