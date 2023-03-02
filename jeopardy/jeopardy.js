/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategory() {
  let response = await axios({
    url: "http://jservice.io/api/categories",
    params: { count: 50 },
    method: "GET",
  });
  let catID = response.data.filter((result) => result.clues_count >= 5);
  let updatedcatID = catID.map((result) => result.id);
  // console.log(updatedcatID);
  return _.sampleSize(updatedcatID, 6);
}
/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */
async function getCategoryClues(id) {
  let responses = await axios({
    url: "http://jservice.io/api/category",
    params: { id: `${id}` },
    method: "GET",
  });
  let allClues = responses.data.clues;
  let randomClues = _.sampleSize(allClues, 5);
  let clues = randomClues.map((results) => ({
    answer: results.answer,
    question: results.question,
    showing: null,
  }));
  return {
    title: responses.data.title,
    clues: clues,
  };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
const height = 5;
const width = 6;

async function fillTable() {
  // console.log(categories);

  const $board = $("#jeopardy");
  $board.innerHtml = "";
  const reset = $("<button>Reset</button>").attr("id", "reset");
  $board.append(reset);
  const $topRow = $("<tr></tr>");
  $topRow.attr("id", "column-top");
  for (let x = 0; x < width; x++) {
    const $headCell = $("<td></td>");
    $headCell.attr("id", x);
    $headCell.text(`${categories[x].title}`);
    $topRow.append($headCell);
  }
  $("thead").append($topRow);

  for (let y = 0; y < height; y++) {
    const $row = $("<tr></tr>");

    for (let x = 0; x < width; x++) {
      const $cell = $("<td></td>").html("?");
      $cell.attr("id", `${x}-${y}`);
      $cell.on("click", handleClick);
      $row.append($cell);
    }

    $board.append($row);
  }
  hideLoadingView();
  $("#start").hide();
  $("#reset").on("click", showLoadingView);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
  let x = evt.target.id;
  let [var1, var2] = x.split("-");

  let clue = categories[var1].clues[var2];
  // console.log(clue);
  let msg;

  if (!clue.showing) {
    msg = clue.question;
    clue.showing = "question";
  } else if (clue.showing === "question") {
    msg = clue.answer;
    clue.showing = "answer";
  } else {
    return;
  }

  $(`#${var1}-${var2}`).html(msg);
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $("tr").remove();
  $("#spin-container").show();
  $("#reset").remove();
  $("#start").show();
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  $("#spin-container").hide();
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  let updatedcatID = await getCategory();
  categories = [];
  for (let id of updatedcatID) {
    categories.push(await getCategoryClues(id));
  }
  fillTable();
}

/** On click of start / restart button, set up game. */
$("#start").on("click", setupAndStart);
// $("#reset").on("click", showLoadingView);
// TODO

/** On page load, add event handler for clicking clues */

// TODO
