export async function getWeatherData(lat, lon) {
    var url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
    var response = await fetch(url);
    return await response.json();
}