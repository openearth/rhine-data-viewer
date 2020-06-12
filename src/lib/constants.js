const CENTER_LATITUDE = 49.2;
const CENTER_LONGITUDE = 6.75;


export const MAP_CENTER = [
  CENTER_LONGITUDE,
  CENTER_LATITUDE
];

export const MAP_ZOOM = 5.5;

export const MAP_BASELAYERS = [
  'light',
  'streets',
].map(layer => ({
  style: `mapbox://styles/mapbox/${ layer }-v9`,
  title: layer,
  thumbnail: `/thumbnails/${ layer }.png`
}));

export const MAP_BASELAYER_DEFAULT = MAP_BASELAYERS[0];
