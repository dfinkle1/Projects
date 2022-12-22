document.querySelector("form").style.backgroundColor = "beige";
const subBtn = document.querySelector("#submit");
const txt = document.querySelector("#imglink");
const btmtxt = document.querySelector("#bottomtxt");
const toptxt = document.querySelector("#toptxt");
const whole = document.querySelector("#wholememe");

// subBtn.addEventListener("click", function (e) {
//   //   e.preventDefault();
//   const txt = document.querySelector("#imglink");
//   const photo = document.querySelector("#photo");
//   const topmeme = document.querySelector(".topmeme");
//   //   topmeme.innerText = toptxt;
//   topmeme.innerText = toptxt.value;
//   photo.innerHTML =
//     '<img src ="' + txt.value + '" alt="Image" width:="300" height="300"/>';
// });

// const removeBtn = document.querySelectorAll(".remove");
// for (let btn of removeBtn) {
//   btn.addEventListener("click", function (e) {
//     e.target.parentElement.remove();
//   });
// }

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const container = document.querySelector(".container");
  const photo = document.createElement("img");
  const botmeme = document.createElement("div");
  const topmeme = document.createElement("div");
  const meme = document.createElement("div");
  const addremovebtn = document.createElement("button");

  addremovebtn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });

  topmeme.innerText = toptxt.value;
  botmeme.innerText = btmtxt.value;
  photo.src = txt.value;
  addremovebtn.innerText = "Remove meme";
  addremovebtn.classList.add(".remove");
  meme.append(topmeme);
  meme.append(botmeme);
  meme.append(photo);
  meme.append(addremovebtn);
  container.append(meme);

  topmeme.classList.add("top");
  botmeme.classList.add("bot");
  container.classList.add("photo");
});
