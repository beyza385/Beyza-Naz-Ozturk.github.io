function hesapla() {
  const name = document.getElementById("name").value.trim();
  const vize = parseFloat(document.getElementById("vize").value);
  const finalNotu = parseFloat(document.getElementById("final").value);
  const result = document.getElementById("result");

  result.style.display = "block";

  if (name === "" || isNaN(vize) || isNaN(finalNotu)) {
    result.innerHTML = '<p class="result-error">Lütfen tüm alanları doğru şekilde doldurun.</p>';
    return;
  }

  if (vize < 0 || vize > 100 || finalNotu < 0 || finalNotu > 100) {
    result.innerHTML = '<p class="result-error">Notlar 0 ile 100 arasında olmalıdır.</p>';
    return;
  }

  const ortalama = (vize * 0.4) + (finalNotu * 0.6);

  let harfNotu = "";
  if (ortalama >= 90) harfNotu = "AA";
  else if (ortalama >= 85) harfNotu = "BA";
  else if (ortalama >= 80) harfNotu = "BB";
  else if (ortalama >= 75) harfNotu = "CB";
  else if (ortalama >= 70) harfNotu = "CC";
  else if (ortalama >= 65) harfNotu = "DC";
  else if (ortalama >= 60) harfNotu = "DD";
  else if (ortalama >= 50) harfNotu = "FD";
  else harfNotu = "FF";

  const gecti = ortalama >= 50;
  const durumClass = gecti ? "success-text" : "fail-text";
  const durum = gecti ? "Geçti" : "Kaldı";

  result.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Ortalama:</strong> ${ortalama.toFixed(2)}</p>
    <p><strong>Harf Notu:</strong> ${harfNotu}</p>
    <p><strong>Durum:</strong> <span class="${durumClass}">${durum}</span></p>
  `;
}
