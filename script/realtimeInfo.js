import { getWeatherData } from "./weatherAPI.js";

var cityData = {
    seoul: { name: "대한민국 서울 KR", lat: 37.56, lon: 126.97 },
    newyork: { name: "미국 뉴욕 US", lat: 40.71, lon: -74.00 },
    tokyo: { name: "일본 도쿄 JP", lat: 35.68, lon: 139.65 }
};

var selector = document.getElementById("city-selector");
var displayBox = document.getElementById("weather-box");

selector.addEventListener("change", async function() {
    var selectedCity = selector.value;
    if (selectedCity === "") {
        displayBox.innerHTML = "<p style='color: #666;'>도시를 선택하면 날씨 정보가 나타납니다.</p>";
        return; //
    }

    displayBox.innerHTML = "<p>날씨 정보 로딩 중... ⏳</p>";

    var data = cityData[selectedCity];
    var weatherResult = await getWeatherData(data.lat, data.lon);

    displayBox.innerHTML = `
        <h3>🌤️ 오늘 날씨 피드: ${data.name}</h3>
        <p>🌡️ 기온: ${weatherResult.current.temperature_2m}°C</p>
        <p>💧 습도: ${weatherResult.current.relative_humidity_2m}%</p>
    `;
});