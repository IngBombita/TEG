export const pointInsidePolygon = (point, polygon) => {
  let segmentCount = 0;

  // Pasar por todos los segmentos del polígono. (Formamos segmentos con cada par de puntos)
  for (let index = 0; index < polygon.length; index += 1) {
    // El último punto forma segmento con el primero
    const nextIndex = index === polygon.length - 1 ? 0 : index + 1;

    // Si el punto queda por encima o por debajo de ambos puntos del segmento, entonces es imposible que la
    // recta horizontal sobre el punto cruce el segmento
    if (
      (point.y > polygon[index][1] && point.y < polygon[nextIndex][1]) ||
      (point.y < polygon[index][1] && point.y > polygon[nextIndex][1])
    ) {
      // Si el punto queda a la derecha de alguno de los puntos del segmento, entonces está a la derecha del mismo
      // y no hay que tenerlo en cuenta
      if (point.x < polygon[index][0] && point.x < polygon[nextIndex][0]) {
        segmentCount += 1;
      }
    }
  }
  // Si la cantidad de segmentos cruzados por la recta es par, entonces el punto está fuera del polígono
  if (segmentCount % 2 === 0) return false;
  return true;
};
