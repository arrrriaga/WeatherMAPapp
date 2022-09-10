import { tablaTEMP } from "./valores.js";
import { destroyChart } from "./charts.js";

var marker; //variable del marcador
var coords = {}; //coordenadas obtenidas con la geolocalización

//Funcion principal
export const initMap = function () {
  //usamos la API para geolocalizar el usuario
  navigator.geolocation.getCurrentPosition(
    function (position) {
      coords = {
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      };
      setMapa(coords); //pasamos las coordenadas al metodo para crear el mapa
    },
    function (error) {
      console.log(error);
    }
  );
};

function setMapa(coords) {
  //Se crea una nueva instancia del objeto mapa
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(coords.lat, coords.lng),
  });

  //Creamos el marcador en el mapa con sus propiedades
  //para nuestro obetivo tenemos que poner el atributo draggable en true
  //position pondremos las mismas coordenas que obtuvimos en la geolocalización
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(coords.lat, coords.lng),
  });

  //agregamos un evento al marcador junto con la funcion callback al igual que el evento dragend que indica
  //cuando el usuario a soltado el marcador
  marker.addListener("drag", function (event) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });

  marker.addListener("dragend", function (event) {
    //escribimos las coordenadas de la posicion actual del marcador dentro del input #coords
    marker.setAnimation(null);

    let coorLAT = this.getPosition().lat();
    let coorLNG = this.getPosition().lng();
    coords = coorLAT + "," + coorLNG;
    document.getElementById("coordsLAT").value = coorLAT;
    document.getElementById("coordsLNG").value = coorLNG;

    tablaTEMP(coorLAT, coorLNG);
  });
}
