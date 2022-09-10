import { getTEMP } from "./API.js";
import { generateChart } from "./charts.js";

export const tablaTEMP = async (lat, lon) => {
  const respuesta = await getTEMP(lat, lon);
  console.log(respuesta);
  const NombreTabla = [respuesta[3]];
  const labels = ["MIN", "Target", "MAX"];
  const datos = [respuesta[1], respuesta[0], respuesta[2]];

  generateChart(NombreTabla, labels, datos);
};
