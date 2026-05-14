document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const applicationForm = document.getElementById("applicationForm");
  const formAlert = document.getElementById("formAlert");
  const emptyResultText = document.getElementById("emptyResultText");
  const resultArea = document.getElementById("resultArea");

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("theme-dark");
      const darkModeEnabled = body.classList.contains("theme-dark");
      themeToggleBtn.textContent = darkModeEnabled ? "Açık Temaya Dön" : "Temayı Değiştir";
      themeToggleBtn.classList.toggle("btn-outline-dark", !darkModeEnabled);
      themeToggleBtn.classList.toggle("btn-outline-light", darkModeEnabled);
    });
  }

  if (!applicationForm) {
    return;
  }

  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const motivation = document.getElementById("motivation").value.trim();
    const agreement = document.getElementById("agreement").checked;

    const missingFields = [];

    if (!fullName) missingFields.push("Ad Soyad");
    if (!email) missingFields.push("E-posta");
    if (!department) missingFields.push("Bölüm");
    if (!motivation) missingFields.push("Motivasyon yazısı");
    if (!agreement) missingFields.push("Koşulları kabul");

    if (missingFields.length > 0) {
      formAlert.textContent = `Eksik alanlar: ${missingFields.join(", ")}. Lütfen tüm alanları doldurun.`;
      formAlert.classList.remove("d-none", "alert-success");
      formAlert.classList.add("alert-danger");
      emptyResultText.classList.remove("d-none");
      resultArea.classList.add("d-none");
      return;
    }

    formAlert.textContent = "Başvurunuz başarıyla alındı.";
    formAlert.classList.remove("d-none", "alert-danger");
    formAlert.classList.add("alert-success");

    resultArea.innerHTML = `
      <div class="card border-success mt-2">
        <div class="card-body">
          <h3 class="h5 card-title text-success">Başvuru Özeti</h3>
          <p class="mb-2"><strong>Ad Soyad:</strong> ${fullName}</p>
          <p class="mb-2"><strong>E-posta:</strong> ${email}</p>
          <p class="mb-2"><strong>Bölüm:</strong> ${department}</p>
          <p class="mb-0"><strong>Motivasyon:</strong> ${motivation}</p>
        </div>
      </div>
    `;

    emptyResultText.classList.add("d-none");
    resultArea.classList.remove("d-none");
  });
});
