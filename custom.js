var yukari = document.getElementsByClassName("yukari_cik")[0];
console.log(yukari);

window.addEventListener("scroll", function () {
  const mesafe = window.scrollY; // sayfanın yukarıdan kaç pixel kaydığını verir
  //console.log(mesafe);
  if (mesafe > 300) {
    yukari.classList.add("goster");
  } else {
    yukari.classList.remove("goster");
  }
});

yukari.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

yukari.addEventListener("mousemove", function () {
  yukari.innerHTML = "&uArr;";
});

yukari.addEventListener("mouseout", function () {
  yukari.innerHTML = "TOP";
});
