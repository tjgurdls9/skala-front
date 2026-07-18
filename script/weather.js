var cityData = {
    paris: { name: "프랑스 파리 FR", lat: 48.85, lon: 2.35 },
    seoul: { name: "대한민국 서울 KR", lat: 37.56, lon: 126.97 },
    newyork: { name: "미국 뉴욕 US", lat: 40.71, lon: -74.00 }
};

var selector = document.getElementById("city-selector");
var displayBox = document.getElementById("weather-box");

selector.addEventListener("change", async function() {
    var selectedCity = selector.value;
    if (selectedCity === "") return;

    var data = cityData[selectedCity];

    displayBox.innerHTML = "<p>실시간 날씨 로딩 중... ⏳</p>";

    try {
        var url = `https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&current=temperature_2m,relative_humidity_2m`;
        
        var response = await fetch(url);
        var weatherResult = await response.json();

        var temp = weatherResult.current.temperature_2m;
        var hum = weatherResult.current.relative_humidity_2m;

        displayBox.innerHTML = `
            <h3>🌎 ${data.name} 실시간 날씨</h3>
            <p>🌡️ 현재 기온: ${temp}°C</p>
            <p>💧 현재 습도: ${hum}%</p>
        `;
    } catch (error) {
        displayBox.innerHTML = "<p>날씨 정보를 가져오는 데 실패했습니다.</p>";
        console.error("에러 발생:", error);
    }
});