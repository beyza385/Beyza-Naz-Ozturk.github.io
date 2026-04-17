function hesapla() {
    let name = document.getElementById("name").value;
    let vize = parseFloat(document.getElementById("vize").value);
    let final = parseFloat(document.getElementById("final").value);

    let ortalama = (vize * 0.4) + (final * 0.6);

    let harf;

    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 80) harf = "BA";
    else if (ortalama >= 70) harf = "BB";
    else if (ortalama >= 60) harf = "CB";
    else if (ortalama >= 50) harf = "CC";
    else harf = "FF";

    let durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    document.getElementById("result").innerHTML = `
        <h3>${name}</h3>
        <p>Ortalama: ${ortalama.toFixed(2)}</p>
        <p>Harf Notu: ${harf}</p>
        <p>Durum: ${durum}</p>
    `;
}
