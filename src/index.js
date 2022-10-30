import 'bootstrap';
import 'leaflet';

import './scss/all.scss';

// 跟使用著要位置
function successGPS(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  center = [lat, lng];
}
function errorGPS(){
  window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為 勝王拉麵店');
}
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(successGPS,errorGPS);
}else{
  window.alert('您的裝置不具備GPS，無法使用此功能');
}

// leaflet建立地圖
let reman = 17;
let center = [25.0559685,121.5253146];
let map = L.map('map').setView(center,reman);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '© OpenStreetMap',
  remanControl: true
}).addTo(map);
let mark = L.marker(center).addTo(map);

function getAPI(){

}