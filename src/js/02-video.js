// Importa la biblioteca Vimeo Player
import Player from '@vimeo/player';
// Importa la función throttle de lodash
import throttle from 'lodash/throttle';

// Crea una instancia del reproductor de Vimeo
const player = new Player(document.getElementById('vimeo-player'));

// Función para guardar el estado del video en el almacenamiento local
const saveVideoState = throttle(async () => {
    try {
        // Obtiene el tiempo actual de reproducción del video
        const currentTime = await player.getCurrentTime();
        // Guarda el tiempo de reproducción en el almacenamiento local
        localStorage.setItem('videoplayer-current-time', currentTime);
    } catch (error) {
        console.error('Error al guardar el tiempo de reproducción:', error);
    }
}, 1000); // Throttle a 1 segundo para limitar la frecuencia de llamadas

// Función para cargar el estado del video desde el almacenamiento local
const loadVideoState = async () => {
    try {
        // Obtiene el tiempo de reproducción guardado del almacenamiento local
        const storedTime = localStorage.getItem('videoplayer-current-time');
        // Si hay un tiempo de reproducción guardado, ajusta el video a ese tiempo
        if (storedTime !== null) {
            await player.setCurrentTime(storedTime);
        }
    } catch (error) {
        console.error('Error al cargar el tiempo de reproducción:', error);
    }
};

// Evento para guardar el estado del video cuando se actualiza el tiempo de reproducción
player.on('timeupdate', saveVideoState);

// Evento al cargar la página para cargar el estado del video desde el almacenamiento local
window.addEventListener('DOMContentLoaded', loadVideoState);