// Add imports above this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryPictures = galleryItems.map((galleryItem) => 
` <a class="gallery__item" href="${galleryItem.original}">
<img class="gallery__image" src="${galleryItem.preview}" 
alt="${galleryItem.description}" /></a>`)
.join("");

document.querySelector(".gallery").insertAdjacentHTML("beforeend", galleryPictures);
new SimpleLightbox(".gallery a"); 
