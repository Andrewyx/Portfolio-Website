// import { fetchImageUrls } from 'google-photos-album-image-url-fetch';
// import axios from 'axios';
import { request } from 'gaxios';

export default function Gallery() {
    getPhotos().catch(er => console.error(er));
    return(<></>)
}

async function getPhotos() {
  // const re = await fetchImageUrls('https://cors-anywhere.herokuapp.com/');
  let response = await request<string>({
    url: 'https://photos.app.goo.gl/bRJhdGMSPZuAAHMXA',
    method: 'GET',
    headers: {"Access-Control-Allow-Origin": "*"},
  })
  console.log(JSON.stringify(response, null, 2));
};