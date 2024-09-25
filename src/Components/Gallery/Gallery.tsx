import { fetchImageUrls } from 'google-photos-album-image-url-fetch';

export default function Gallery() {
    getPhotos().catch(er => console.error(er));
    return(<><div>PlaceHolderText</div></>)
}

async function getPhotos() {
  const re = await fetchImageUrls('https://photos.app.goo.gl/bRJhdGMSPZuAAHMXA');
  
  console.log(JSON.stringify(re, null, 2));
};