import { heroes } from './data/heroes';

const getHeroeById = id => heroes.find(heroe => heroe.id === id);

const getHeroeByOwner = (owner) => {
  return heroes.filter(heroe => heroe.owner === owner);
};

console.log(getHeroeById(2));
console.log('owner: ', getHeroeByOwner('DC'));