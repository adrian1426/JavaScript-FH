const getImagen = async () => {
  try {
    const apiKey = 'xVI26s7oJ31tzN6vNN6xBicIz9IcWB4h';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await respuesta.json();

    const url = data.images.original.url;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();