"use strict";

/** Button Back **/
const backButton = document.getElementById("button_back");

backButton.addEventListener("click", () => {
  history.back();
});

/** Form validation **/
const artistBox = document.getElementById("search_name");

function validateForm() {
  const artistName = document.getElementById("search_name").value;
  const errorBox = document.getElementById("error_box");

  artistName.length < 4
    ? (errorBox.style.display = "block")
    : (errorBox.style.display = "none");
}

artistBox.onchange = validateForm;

/** Store Selection **/

const alb1 = document.getElementById("album_1");
const alb2 = document.getElementById("album_2");
const alb3 = document.getElementById("album_3");
const alb4 = document.getElementById("album_4");
const alb5 = document.getElementById("album_5");
const alb6 = document.getElementById("album_6");

alb1.addEventListener("click", () => {
  localStorage.setItem("album_1", "added");
  alb1.classList.add("added");
});
alb2.addEventListener("click", () => {
  localStorage.setItem("album_2", "added");
  alb2.classList.add("added");
});
alb3.addEventListener("click", () => {
  localStorage.setItem("album_3", "added");
  alb3.classList.add("added");
});
alb4.addEventListener("click", () => {
  localStorage.setItem("album_4", "added");
  alb4.classList.add("added");
});
alb5.addEventListener("click", () => {
  localStorage.setItem("album_5", "added");
  alb5.classList.add("added");
});
alb6.addEventListener("click", () => {
  localStorage.setItem("album_6", "added");
  alb6.classList.add("added");
});

window.onload = () => {
  let activestate_1 = localStorage.getItem("album_1");
  let activestate_2 = localStorage.getItem("album_2");
  let activestate_3 = localStorage.getItem("album_3");
  let activestate_4 = localStorage.getItem("album_4");
  let activestate_5 = localStorage.getItem("album_5");
  let activestate_6 = localStorage.getItem("album_6");

  if (activestate_1 == "added") {
    alb1.classList.add("added");
  }
  if (activestate_2 == "added") {
    alb2.classList.add("added");
  }
  if (activestate_3 == "added") {
    alb3.classList.add("added");
  }
  if (activestate_4 == "added") {
    alb4.classList.add("added");
  }
  if (activestate_5 == "added") {
    alb5.classList.add("added");
  }
  if (activestate_6 == "added") {
    alb6.classList.add("added");
  }
};
