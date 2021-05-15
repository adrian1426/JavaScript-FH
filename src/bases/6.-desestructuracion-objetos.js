const persona = {
  nombre: 'Adrian',
  apellido: 'Hernández',
  edad: 23
};

const { nombre: nuevoNombre } = persona;

const returnaPersona = ({ nombre }) => {
  console.log('returnaPersona: ', nombre);
};

console.log(persona.nombre);
console.log(nuevoNombre);
returnaPersona(persona);