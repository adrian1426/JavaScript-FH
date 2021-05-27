import { getHeroeById } from './8.-import-export';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     //reject('No se pudo encontrar el heroe');
//   }, 2000)
// });

// promesa.then((response) => {
//   console.log('Then de la promesa: ', response);
// }).catch(err => {
//   console.warn(err);
// });


const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      }

      reject('No existe el heroe');

    }, 2000);
  });
};

getHeroeByIdAsync(1)
  .then(heroe => console.log('Heroe: ', heroe))
  .catch(err => console.error(err));

//cuando se desea pasar el resultado a un solo parámetro, también es posible enviarlo sin especificar
getHeroeByIdAsync(3)
  .then(console.log)
  .catch(console.error);