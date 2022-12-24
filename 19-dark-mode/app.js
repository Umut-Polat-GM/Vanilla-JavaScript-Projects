const toggleBtn = document.querySelector(".btn"); // Açma/kapama düğmesini seç
const articlesContainer = document.querySelector(".articles"); // Makalelerin bulunduğu konteyneri seç

toggleBtn.addEventListener("click", () => { // Açma/kapama düğmesine tıklama olay dinleyicisi ekle
    document.documentElement.classList.toggle("dark-theme"); // Döküman elemanının sınıf listesine "dark-theme" sınıfını ekle/çıkar
});

const articlesData = articles.map((article) => { // Makaleler dizisini gez
        const { title, date, length, snippet } = article; // Makale öğelerinin değişkenlerine ata
        const formatDate = moment(date).format("MMMM Do, YYYY"); // Tarihi "Ay gün, yıl" şeklinde biçimlendir
        return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min okuma</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`; // Makale için HTML döndür
    }).join(""); // Tüm makalelerin HTML'ini birleştir

articlesContainer.innerHTML = articlesData; // Makaleler konteynerinin içeriğini makalelerin HTML'ine eşitle
