function donustur() {
  const value = parseFloat(document.getElementById("value").value);
  const type = document.getElementById("type").value;
  const result = document.getElementById("convertResult");

  result.style.display = "block";

  if (isNaN(value)) {
    result.innerHTML = `<p class="result-error">Lütfen geçerli bir sayı giriniz.</p>`;
    return;
  }

  let convertedValue = 0;
  let aciklama = "";
  let fromUnit = "";
  let toUnit = "";

  if (type === "meterToKm") {
    convertedValue = value / 1000;
    fromUnit = "metre";
    toUnit = "kilometre";
    aciklama = convertedValue.toFixed(4);
  } else if (type === "celsiusToFahrenheit") {
    convertedValue = (value * 9 / 5) + 32;
    fromUnit = "°C";
    toUnit = "°F";
    aciklama = convertedValue.toFixed(2);
  } else if (type === "kgToGram") {
    convertedValue = value * 1000;
    fromUnit = "kilogram";
    toUnit = "gram";
    aciklama = convertedValue.toFixed(2);
  }

  result.innerHTML = `
    <h3>Sonuç</h3>
    <p><strong>${value} ${fromUnit}</strong> = <strong>${aciklama} ${toUnit}</strong></p>
  `;
}
