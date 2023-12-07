const teamPhotos = [
    'Group1.jpg',
    'Group2.jpg',
    'Group3.jpg',
    'Group4.jpg',
    'Group5.jpg',
    'Group6.jpg',
    'Group7.jpg',
    'Group8.jpg',
];

function displayGallery() {
    const galleryElement = document.getElementById('gallery');

    teamPhotos.forEach((photoPath, index) => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('art-piece');
        photoElement.innerHTML = `
            <img src="${photoPath}" alt="Team Photo">
        `;
        galleryElement.appendChild(photoElement);
    });
}

function updateBackgroundColor() {
    const body = document.body;
    const scrollPosition = window.scrollY;
    const backgroundColor = `rgba(154, 8, 32, ${scrollPosition / 500})`;

    body.style.backgroundColor = backgroundColor;
}

window.onload = () => {
    displayGallery();
    window.addEventListener('scroll', updateBackgroundColor);
};