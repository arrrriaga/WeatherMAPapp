import { getTEMP } from "./API.js";
import { generateTEMPChart } from "./TEMPchart.js";
import { generateOTHERSChart } from "./OTHERSchart.js";

export const tablaTEMP = async (lat, lon) => {
  const respuesta = await getTEMP(lat, lon);
  console.log(respuesta);
  const NombreTabla = [respuesta[3] + ": Temperatura"];
  const labels = [
    "MIN: " + Math.round(respuesta[1]),
    "Target: " + Math.round(respuesta[0]),
    "MAX: " + Math.round(respuesta[2]),
  ];
  const datos = [respuesta[1], respuesta[0], respuesta[2]];

  generateTEMPChart(NombreTabla, labels, datos);
};

export const tablaOTHERS = async (lat, lon) => {
  const respuesta = await getTEMP(lat, lon);
  console.log(respuesta);
  const NombreTabla = [respuesta[3] + ": otros datos"];
  const labels = [
    "Humedad: " + Math.round(respuesta[4]),
    "Nivel del mar: " + Math.round(respuesta[5]),
    "Presión: " + Math.round(respuesta[6]),
  ];
  const datos = [respuesta[4], respuesta[5], respuesta[6]];

  generateOTHERSChart(NombreTabla, labels, datos);
};
