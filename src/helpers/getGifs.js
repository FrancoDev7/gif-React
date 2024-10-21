
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const getGifs = async ( category ) => {

  const url = `${API_URL}&api_key=${API_KEY}&q=${category}`;
  const resp = await fetch( url );
  const { data = [] } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title : img.title,
    url : img.images.downsized_medium.url,
  }));

  
  return gifs;

}