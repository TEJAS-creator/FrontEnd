async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "18e45b0c50089452f8d148615c708957"; // Replace this with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;
    document.getElementById("weatherResult").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
