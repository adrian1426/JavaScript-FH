const apiKey = 'xVI26s7oJ31tzN6vNN6xBicIz9IcWB4h';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//promesas en cadena
peticion
  .then(response => response.json())
  .then(({ data }) => {
    const url = data.images.original.url;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(err => console.warn(err));

// peticion
//   .then(response => {
//     response.json().then(data => console.log(data));
//   })
//   .catch(err => console.log(err));