import { fetchImageUrls } from 'google-photos-album-image-url-fetch';

//TODO: WIP

export default function Gallery() {
    getPhotos().catch(er => console.error(er));
    return(<></>)
}

async function getPhotos() {
  const re = await fetchImageUrls('https://photos.app.goo.gl/bRJhdGMSPZuAAHMXA');
  
  console.log(JSON.stringify(re, null, 2));
};