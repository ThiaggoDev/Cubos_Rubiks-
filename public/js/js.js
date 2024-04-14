
const carouselItems = document.querySelectorAll('.img_1');
carouselItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageUrl = item.src;
        const zoomedImage = document.getElementById('zoomed-image');
        zoomedImage.src = imageUrl;
        document.querySelector('.zoom-container').style.display = 'block';
    });
});

// Función para cerrar la imagen ampliada
function closeZoom() {
    document.querySelector('.zoom-container').style.display = 'none';
}

window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    loader.style.display = "none";
    content.style.display = "block";
});