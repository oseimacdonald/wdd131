document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    const temperature = 15; // Static value for temperature
    const windSpeed = 10; // Static value for wind speed

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;

    // Call updateWindChill when the page finishes loading
    window.addEventListener('load', updateWindChill);
});
