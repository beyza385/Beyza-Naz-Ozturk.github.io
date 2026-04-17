function donustur() {
  const value = parseFloat(document.getElementById("value").value);
  const type = document.getElementById("type").value;
  const result = document.getElementById("convertResult");

  if (isNaN(value)) {
    result.innerHTML = `
      <div class="result-error">
        Lütfen geçerli bir sayı giriniz.
      </div>
    `;
    return;
  }

  let convertedValue = 0;
  let aciklama = "";

  if (type === "meterToKm") {
    convertedValue = value / 1000;
    aciklama = `${value} metre = ${convertedValue.toFixed(3)} kilometre`;
  } else if (type === "celsiusToFahrenheit") {
    convertedValue = (value * 9 / 5) + 32;
    aciklama = `${value} °C = ${convertedValue.toFixed(2)} °F`;
  } else if (type === "kgToGram") {
    convertedValue = value * 1000;
    aciklama = `${value} kilogram = ${convertedValue.toFixed(2)} gram`;
  }

  result.innerHTML = `
    <h3>Sonuç</h3>
    <p>${aciklama}</p>
  `;
}
