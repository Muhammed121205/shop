function orderProduct(productName) {
    const number = "77055645309"; // Мына жерге өз номеріңді жаз
    const message = `Сәлеметсіз бе! Маған ${productName} керек еді.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function zoomImage(img) {
    const overlay = document.getElementById('overlay');
    const zoomedImg = document.getElementById('zoomedImg');
    zoomedImg.src = img.src;
    overlay.style.display = 'flex';
}

function closeZoom() {
    document.getElementById('overlay').style.display = 'none';
}