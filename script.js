let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;

document.querySelector('.gallery-button.next').addEventListener('click', function() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

document.querySelector('.gallery-button.prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateGallery();
});

function updateGallery() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    galleryWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
