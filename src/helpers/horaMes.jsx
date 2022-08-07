export const horaMes = (fecha) => {
  const fechaActual = new Date(fecha);
  const fechaHoy = new Date();

  const diferencia = fechaHoy.getTime() - fechaActual.getTime();

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 0) {
    return horaMes2(fecha);
  } else if (horas > 0) {
    return horaMes2(fecha);
  } else if (minutos > 0) {
    if (minutos === 1) {
      return `${minutos} minute ago`;
    } else {
      return `${minutos} minutes ago`;
    }
  } else if (segundos > 0) {
    if (segundos === 1) {
      return `${segundos} second ago`;
    } else {
      return `${segundos} seconds ago`;
    }
  } else {
    return `Some seconds ago`;
  }
};

const horaMes2 = (fecha) => {
  const time = new Date(fecha);
  const hora = time.getHours();
  const minutos = time.getMinutes();
  const segundos = time.getSeconds();
  const dia = time.getDate();
  const mes = time.getMonth() + 1;
  const anio = time.getFullYear();
  const horaMes = `${hora}:${minutos}`;
  const fechaMes = `${dia}/${mes}/${anio}`;
  const fechaHora = ` ${horaMes} - ${fechaMes} `;
  return fechaHora;
};
