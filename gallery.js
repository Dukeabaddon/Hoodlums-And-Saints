const teamPhotos = [
    '/Group/Group/Group1.jpg',
    '/Group/Group/Group2.jpg',
    '/Group/Group/Group3.jpg',
    '/Group/Group/Group4.jpg',
    '/Group/Group/Group5.jpg',
    '/Group/Group/Group6.jpg',
    '/Group/Group/Group7.jpg',
    '/Group/Group/Group8.jpg',
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