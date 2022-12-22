document.body.style.backgroundColor = "cyan";

const textBox = document.querySelector("#add-List");
const submitBtn = document.querySelector("form button");
const todoList = document.querySelector("#todos");
const form = document.querySelector("form");

// ** if this is enabled i can't create a brand new item const newItem = document.createElement("li");

const removeBtn = document.querySelectorAll(".remove");
for (let btn of removeBtn) {
  btn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
}
//** how to toggle completed */
const completedBtn = document.querySelectorAll(".complete");
for (let compl of completedBtn) {
  compl.addEventListener("click", function (e) {
    e.target.parentElement.style.textDecoration =
      e.target.parentElement.style.textDecoration === "line-through"
        ? ""
        : "line-through";
  });
}

//*lines thru list cant iterate through ul
// for (let compl of todoList) {
//   compl.addEventListener("click", function (e) {
//     compl.style.textDecoration = "line-through";
// todoList.style.textDecoration = "line-through";
//   });
// }

//!*! this is how i add a new item!!  but the problem is it only adds 1 LI
//* added an LI by including newItem in eventListener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  const completeBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  newItem.innerText = textBox.value;
  newItem.append(completeBtn);
  removeBtn.innerText = "Remove Item";
  newItem.append(removeBtn);
  todoList.appendChild(newItem);
});

// newItem.innerText = addLocation.value;
// todoList.appendChild(newItem);

// newItem.innerText = form.value;
// ulLoc.appendChild(newItem);

//* 1) identify what is being manipulated. the text box will enter a new list item.
//* we will also add a remove list button to each LI once the item is complete
//* alternatively it could be a cross out function
//* make it so any additional Li's are added to the bottom of the list
