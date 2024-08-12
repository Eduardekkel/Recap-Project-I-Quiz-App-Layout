const emptyBookmark = document.querySelector('[data-js="bookmark-empty"]');
let checkedBookmark = true;

emptyBookmark.addEventListener("click", (check) => {
  if (checkedBookmark) {
    emptyBookmark.src = "./css-components/bookmark-check.svg";
    checkedBookmark = false;
    st;
  } else {
    emptyBookmark.src = "./css-components/bookmark.svg";
    checkedBookmark = true;
  }
});

const showAnswerButtons = document.querySelectorAll(".show-answer");

showAnswerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answerId = button.dataset.answerId;
    const answerElement = document.getElementById(answerId);
    answerElement.classList.toggle("hidden");
    button.textContent = answerElement.classList.contains("hidden")
      ? "Show Answer"
      : "Hide Answer";
  });
});

const darkModeToggle = document.getElementById("dark-mode");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});
