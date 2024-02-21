//estado del usuario autorizado o no
let usuarioAutenticado = false;

//Funciones Get y Set de la auntenticación
const setAutenticado = (estado) => {
  usuarioAutenticado = estado;
};


const getAutenticado = () => {
  return usuarioAutenticado;
};

export { setAutenticado, getAutenticado };
