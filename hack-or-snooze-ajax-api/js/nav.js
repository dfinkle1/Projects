"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function submit() {
  // hidePageComponents();
  $submitForm.toggle();
}
$navSubmit.on("click", submit);

$("#submitBtn").on("click", addStoryFunc);
async function addStoryFunc(evt) {
  evt.preventDefault();
  let titleVal = $("#title").val();
  let authorVal = $("#author").val();
  let websiteVal = $("#url").val();
  let newStory = await storyList.addStory(currentUser, {
    title: `${titleVal}`,
    author: `${authorVal}`,
    url: `${websiteVal}`,
  });
  console.log(titleVal, authorVal, websiteVal);
}
