// Importa SimpleLightbox y su CSS
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Importa los elementos de la galería
import { galleryItems } from './gallery-items.js';
// Obtiene el contenedor de la galería en el DOM
const galleryContainer = document.querySelector('.gallery');

// Itera sobre los elementos de la galería
galleryItems.forEach(item => {
    // Crea un nuevo elemento de lista
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    // Crea un enlace para la imagen a tamaño completo
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    // Crear la imagen de vista previa
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;

    // Agrega la imagen al enlace
    link.appendChild(img);

    // Agrega el enlace al elemento de lista
    listItem.appendChild(link);

    // Agrega el elemento de lista al contenedor de la galería
    galleryContainer.appendChild(listItem);
});

// Inicializa SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a');