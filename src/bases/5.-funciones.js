function saludar(nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar3 = nombre => `Hola ${nombre}`;

const getUser = () => (
  {
    user: 'kanty',
    id: '1234'
  }
);


console.log(saludar3('Guku'));
console.log(getUser());