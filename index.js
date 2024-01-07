const container = document.querySelector(".container");
window.onload = () => {
  Swal.fire("Haloo Ayang", "", "").then(() => {
    container.classList.remove("d-none");
    
    const audio = new Audio("musik/ssstik.io_1704468263762.mp3");
    audio.play();
    audio.loop = true;
    
  });
};

function slide1() {
  let slideSatu = document.getElementById("slide1");
  let slideDua = document.getElementById("slide2");

  container.style.transform = "scale(1.2)";
  slideSatu.classList.add("animate__animated", "animate__slideOutLeft");
  setTimeout(() => {
    slideSatu.classList.add("d-none");
    slideDua.classList.remove("d-none");
  }, 850);
}

function slide2() {
  let slideDua = document.getElementById("slide2");
  let slideTiga = document.getElementById("slide3");

  container.style.transform = "scale(1)";
  slideDua.classList.add("animate__animated", "animate__slideOutLeft");
  setTimeout(() => {
    slideDua.classList.add("d-none");
    slideTiga.classList.remove("d-none");
  }, 850);
}

function slide3() {
  let slideTiga = document.getElementById("slide3");
  let slideEmpat = document.getElementById("slide4");

  container.style.transform = "scale(1.2)";
  slideTiga.classList.add("animate__animated", "animate__slideOutLeft");
  setTimeout(() => {
    slideTiga.classList.add("d-none");
    slideEmpat.classList.remove("d-none");
  }, 850);
}

function slide4() {
  let slideEmpat = document.getElementById("slide4");
  let slideLima = document.getElementById("slide5");

  container.style.transform = "scale(1)";
  slideEmpat.classList.add("animate__animated", "animate__slideOutLeft");
  setTimeout(() => {
    slideEmpat.classList.add("d-none");
    slideLima.classList.remove("d-none");
  }, 850);
}

function slide5() {
  let slideLima = document.getElementById("slide5");
  let slideEnam = document.getElementById("slide6");

  container.style.transform = "scale(1.2)";
  slideLima.classList.add("animate__animated", "animate__slideOutLeft");
  setTimeout(() => {
    slideLima.classList.add("d-none");
    slideEnam.classList.remove("d-none");
  }, 850);
}

function slide6() {
  let slideEnam = document.getElementById("slide6");
  let slideTujuh = document.getElementById("slide7");

  container.style.transform = "scale(1)";
  slideEnam.classList.add("animate__animated", "animate__slideOutLeft");
  setTimeout(() => {
    slideEnam.classList.add("d-none");
    slideTujuh.classList.remove("d-none");
    mengetik();
  }, 850);
}

const p = document.getElementById("p");
let i = 0, text;
const pesan = document.getElementById("pesan");

text = "dijalan ada lampu, \n dikuburan ada hantu, \n dikerajaan ada ratu, \n tapi di hatiku... \n cuma ada kamu, jiakhhh <3333";

function mengetik() {
  if (i < text.length) {
    p.innerHTML += text.charAt(i);
    i++;
    setTimeout(mengetik, 50);
  } else {
    pesan.classList.remove("d-none");
  }
}