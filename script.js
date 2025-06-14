let daynight = document.getElementById("daynight");
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");
let bg = document.getElementById("bg");
var rotation = 0;
let day = "day";

sun.addEventListener("click", rotate);
moon.addEventListener("click", rotate);

function rotate() {
  if (
    text.innerHTML ==
      "klik matahari nya nia" ||
    scene >= 44
  ) {
    rotation = rotation + 0.5;
    daynight.style.transform = "rotate(" + rotation + "turn)";
    document.body.classList.toggle("dark-theme");
  }
  if (rotation % 1 == 0) day = "day";
  else day = "night";
}

function stars() {
  let count = 300;
  let scene = document.querySelector(".content");
  let i = 0;
  while (i < count) {
    let star = document.createElement("star");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 1;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    star.style.animationDuration = 15 + duration + "s";
    star.style.animationDelay = duration + "s";

    scene.appendChild(star);
    i++;
  }
}

function firefliesF() {
  let scene = document.querySelector("#fireflies");
  let count = 1000;
  let i = 0;
  while (i < count) {
    let fireflies = document.createElement("fireflies");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 1;

    fireflies.style.left = x + "px";
    fireflies.style.top = y + "px";
    fireflies.style.width = 1 + size + "px";
    fireflies.style.height = 1 + size + "px";
    fireflies.style.animationDuration = 15 + duration + "s";
    fireflies.style.animationDelay = duration + "s";

    scene.appendChild(fireflies);
    i++;
  }
}

let content = document.getElementById("content");
let text = document.getElementById("text");
let magic = document.getElementById("magic");
let shoots = document.getElementById("shootingStar");
let btn = document.getElementById("btnWrap");
let cover = document.getElementById("cover");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let scene = -1;
content.addEventListener("click", function () {
  scene++;
  if (scene == 0) {
    var audio = new Audio("audio.mp3");
    audio.play();

    cover.style.animation = "fadeout 1s alternate forwards";
  } else if (scene == 1) {
    text.innerHTML = "pohonnya bagus ngga nia?";
    cover.style.zIndex = "-98";
  } else if (scene == 2) {
    text.innerHTML = "berwarna gituuuu ya hehe";
  } else if (scene == 3) {
    text.innerHTML = "yang warna warni itu ceritanya buahnya :D";
  } else if (scene == 4) {
    text.innerHTML = "Nanti kalau mau aku ambilkn(hehe)";
  } else if (scene == 5) {
    text.innerHTML =
      "btw Cantik kan";
  } else if (scene == 6) {
    text.innerHTML = "abstrak gitu ya mwehehe";
  } else if (scene == 7) {
    text.innerHTML = "coba deh amati sebentar, sebenarnya ada pesan tersirat loh nia";
  } else if (scene == 8) {
    text.innerHTML = "kalo tau pasti paham, kalo ga paham yaudah skip dulu aja nanti kepikiran wkwk";
  } else if (scene == 9) {
    text.innerHTML =
      "tapi warna pohon ini akan lebih bagus sewaktu malam hari niaa";
  } else if (scene == 10) {
    text.innerHTML = "jadi nanti nia tungguin aja sampai malam ya wkwk";
  } else if (scene == 11) {
    text.innerHTML =
      "hahaha bercanda jangan ngambek ya, ini aku sulap deh biar cepat jadi malam";
  } else if (scene == 12) {
    text.innerHTML =
      "sinii, aku kasih kekuatan jempolnya buat muterin langit";
  } else if (scene == 13) {
    text.innerHTML = "coba klik mataharinya deh, aku jamin nia bakal kagum🤣";
  } else if (scene == 14 && day == "night") {
    bg.style.background = "#000";
    let count = 0;
    text.innerHTML = "";
    const actionInterval = setInterval(function () {
      if (count == 3) {
        clearInterval(actionInterval);
        text.innerHTML = "gimana keren kan wkwk";
      }
      count++;
    }, 500);
  } else if (scene >= 14 && scene <= 43 && day != "night") {
    scene = 13;
    text.innerHTML = "klik matahari nya nia";
  } else if (scene == 15) {
    text.innerHTML = "this is a glowing tree too";
    text.style.transitionDelay = "0s";
  } else if (scene == 16) {
    text.innerHTML = "pohon nya bakal bersinar kalo malam hari";
  } else if (scene == 17) {
    text.innerHTML = "tapi kaya biasa aja ya?🥹";
  } else if (scene == 18) {
    text.innerHTML = "langitnya juga sepi kaya aku kalau nianya lagi sibuk :D";
  } else if (scene == 19) {
    text.innerHTML =
      "aku ingat kamu pernah bilang kalo lania suka yang pastel2 gitu";
  } else if (scene == 20) {
    text.innerHTML = "jadi, untuk sekarang aku mau buat nia jadi suka yang banyak warna ini juga, let me shiow u how magical this night would be";
  } else if (scene == 21) {
    text.innerHTML = "u ready?";
  } else if (scene == 22) {
    $(".fireworks").fireworks({
      sound: false,
      opacity: 1,
      width: "100%",
      height: "100%",
    });
    let count = 3;
    const actionInterval = setInterval(function () {
      text.style.fontSize = "18px";
      if (count > 0) text.innerHTML = count;
      else if (count == 0) {
        text.innerHTML = "";
        text.style.fontSize = "18px";
      } else if (count == -3) {
        $(".fireworks").remove();
        bg.style.background = "var(--background-color)";
        bg.style.animation = "bgcolor 1.5s linear";
        stars();
        firefliesF();
        text.style.top = "20%";
      } else if (count == -5) {
        text.style.animation = "fade 2s linear";
        text.style.fontSize = "18px";
        text.innerHTML = "Selamat Ulang Tahunn Yang Ke-19 Ya Lania";
        clearInterval(actionInterval);
      }
      count--;
    }, 1000);
  } else if (scene == 23) {
    text.style.fontSize = "18px";
    text.style.top = "23%";
    text.innerHTML = "Selamat Happy Birthday, Sehat Selalu Lania❤️";
  } else if (scene == 24) {
    text.innerHTML = "Nia jangan sedih sedih terus";
  } else if (scene == 25) {
    text.innerHTML = "kado nya ini aku kasih 500 bintang aja ya...";
  } else if (scene == 26) {
    text.innerHTML = "beneran 500, kalo ga percaya hitung aja sendiri haha";
  } else if (scene == 27) {
    text.innerHTML = "dan untuk wishnya, buat aja sendri nanti aku bantu aamiinin wlee🤪";
  } else if (scene == 28) {
    text.innerHTML = "tuh aku kasih bintang jatuh satu";
    shoots.style.display = "block";
    shoots.innerHTML = "<span></span>";
    shoots.classList = "shootingStar one";
  } else if (scene == 29) {
    text.innerHTML = "kecepetan ya? wkwk";
    shoots.classList = "shootingStar none";
  } else if (scene == 30) {
    text.innerHTML = "oke deh, nih sekali lagi...";
  } else if (scene == 31) {
    text.innerHTML = "tuhhh, buruan make a wish";
    shoots.classList = "shootingStar one";
  } else if (scene == 32) {
    text.innerHTML = "wkwkwkwkwkwk kamu wish apa? atau ga sempet?";
    btn.style.display = "flex";
  } else if (scene == 33) {
    text.innerHTML = "suruh siapa lama🤣";
    btn.style.display = "none";
  } else if (scene == 34) {
    text.innerHTML = "oke deh, aku kasih lagi mau ga?";
    yes.innerHTML = "mauuu";
    no.innerHTML = "mau juga";
    btn.style.display = "flex";
  } else if (scene == 35) {
    text.innerHTML = "tuh aku spam-in bintang jatuh buat Laniaa";
    btn.style.display = "none";
    shoots.classList = "shootingStar";
    shoots.innerHTML =
      "<span></span><span></span><span></span><span></span><span></span>";
  } else if (scene == 36) {
    text.innerHTML = "biar bisa buat permohonan sebanyak mungkin, nanti aku bantu aamiinkan wkwk";
  } else if (scene == 37) {
    text.innerHTML = "dan biar aku ga dikatain pelit wkwk 🤣😂";
  } else if (scene == 38) {
    text.innerHTML = "+ 1 lagi nih...";
  } else if (scene == 39) {
    text.innerHTML = "aku mau bilang";
  } else if (scene == 40) {
    text.innerHTML =
      "Hari ini hari yang spesial buat nia, kamu berhasil bertahan sejauh ini Selamat Ya nia";
  } else if (scene == 41) {
    text.innerHTML =
      "Aku Senang Bisa bertemu kamu, Kamu Seseorang yang spesial buat aku";
  } else if (scene == 42) {
    text.innerHTML = "aku punya sesuatu lagi buat kamu";
  } else if (scene == 43) {
    let count = 1;
    const actionInterval = setInterval(function () {
      if (count == 0) {
        magic.style.display = "block";
        magic.style.animation = "fade 2s linear";
        document.querySelector("#fireflies").style.animation =
          "fade 1s alternate forwards";
      } else if (count == -2) {
        text.style.animation = "fade 1s linear";
        text.innerHTML = "tap nia ada kunang2 juga";
      }
      count--;
    }, 1000);
  } else if (scene == 44) {
    text.innerHTML = "tap aja pokoknya";
  } else if (scene >= 46) {
    window.location.href = "https://gifft.me/o/d/2jnu182zynwmjtpctcyjgq3z";
  }
});
