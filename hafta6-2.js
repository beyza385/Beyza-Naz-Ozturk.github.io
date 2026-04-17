function donustur() {
    let value = parseFloat(document.getElementById("value").value);
    let type = document.getElementById("type").value;

    let result;

    if (type === "cf") {
        result = (value * 9/5) + 32;
    }
    else if (type === "km") {
        result = value / 1000;
    }
    else if (type === "kg") {
        result = value * 1000;
    }

    document.getElementById("result").innerHTML = `
        <p>Sonuç: ${result}</p>
    `;
}
