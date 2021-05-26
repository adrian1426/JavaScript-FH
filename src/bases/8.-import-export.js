import heroecitos, { owners } from '../data/heroes';

const getHeroeById = id => heroecitos.find(heroe => heroe.id === id);

const getHeroeByOwner = (owner) => {
  return heroecitos.filter(heroe => heroe.owner === owner);
};

console.log(getHeroeById(2));
console.log('owner: ', getHeroeByOwner('DC'));
console.log(owners);