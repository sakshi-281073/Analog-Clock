function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = ((seconds / 60) * 360) + 90; // Offset for CSS rotation
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Offset for CSS rotation
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // Offset for CSS rotation

    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); 