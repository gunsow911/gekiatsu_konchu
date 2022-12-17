import L from 'leaflet';

const iconDefault = new L.Icon({
  iconUrl: 'icons/marker-icon.png',
  iconSize: new L.Point(32, 32),
})

const iconPark = new L.Icon({
  iconUrl: 'icons/park-icon.png',
  iconSize: new L.Point(32, 32),
});

const iconShrine = new L.Icon({
  iconUrl: 'icons/shrine-icon.png',
  iconSize: new L.Point(32, 32),
});

const iconSports = new L.Icon({
  iconUrl: 'icons/sports-icon.png',
  iconSize: new L.Point(32, 32),
});

const iconCamp = new L.Icon({
  iconUrl: 'icons/camp-icon.png',
  iconSize: new L.Point(32, 32),
});

export {iconDefault, iconPark,iconShrine,iconSports, iconCamp };
