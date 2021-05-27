import heroecitos from '../data/heroes';

export const getHeroeById = id => heroecitos.find(heroe => heroe.id === id);

export const getHeroeByOwner = (owner) => {
  return heroecitos.filter(heroe => heroe.owner === owner);
};

// console.log(getHeroeById(2));
// console.log('owner: ', getHeroeByOwner('DC'));
// console.log(owners);