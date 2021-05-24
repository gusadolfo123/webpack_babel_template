import Photos from "./photos";
import "../app.css";

const photos = new Photos();
console.log("prueba");
photos.getPhotos().then((res) => console.log(res));

function isValidJson(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJson("asdasd"));
