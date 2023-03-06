const video = document.querySelector("#myVideo");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const btnmodal = document.querySelector(".btn-modal");
const btnplay = document.querySelector(".play button");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputSpan = document.querySelectorAll("#formulario span");
const regEx = /\S+@\S+\.\S+/;
let x = 0;

// reproduzir o video e chamar form()
btnplay.addEventListener("click", () => {
  document.querySelector(".play").style.display = "none";
  video.style.border = "none";
  video.volume = 1.0;
  video.play();

  if (x === 0) {
    form();
    x++;
  }
});

//pausar o video
function pause() {
  if (video.style.border === "none") {
    video.pause();
    document.querySelector(".play").style.display = "flex";
    video.style.border = "1.8px solid white";
  }
}
video.addEventListener("click", () => {
  pause();
});

// validar os inputs
btnmodal.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputName.value.length < 3) {
    inputSpan[0].style.opacity = 1;
    inputName.style.border = "1.5px solid red";
  } else {
    inputSpan[0].style.opacity = 0;
    inputName.style.border = "1.5px solid #3fce7b";

    if (regEx.test(inputEmail.value)) {
      inputSpan[1].style.opacity = 0;
      inputEmail.style.border = "1.5px solid #3fce7b";

      modal.classList.remove("active");
      btnBuy();
    } else {
      inputSpan[1].style.opacity = 1;
      inputEmail.style.border = "1.5px solid red";
    }
  }
});

// clicou em comprar
btn.addEventListener("click", () => {
  pause();
  alert(
    "o usuario seria encaminhado para a pagina de venda mas eu não fiz a pagina de venda ainda"
  );
});

// aparecer form na tela
function form() {
  const openForm = setInterval(() => {
    let timeVideo = parseInt(video.currentTime);

    if (timeVideo === 10) {
      modal.classList.add("active");
      clearInterval(openForm);
      pause();
    }
  }, 1000);
}

// aparecer butão de comprar
function btnBuy() {
  const openBtn = setInterval(() => {
    let timeVideo = parseInt(video.currentTime);

    if (timeVideo === 15) {
      btn.classList.add("active");
      clearInterval(openBtn);
    }
  }, 1000);
}
