let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Haiii Dinaa, Selamat Pagi 🌞"
    : timeNow >= 12 && timeNow < 18
    ? "Haiii Dinaa, Selamat Sore 🌥️"
    : "Haiii Dinaa, Selamat Malam 💫";
container.innerHTML = `<h1>${greeting}</h1>`;