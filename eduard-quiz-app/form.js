const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  const tag = document.getElementById("tag").value;
});

const formContainer = document.querySelector("form").parentNode;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  const tag = document.getElementById("tag").value;

  const newCard = document.createElement("section");
  newCard.classList.add("question-card");
  newCard.innerHTML = `
    <h2>${question}</h2>
    <p class="answer" hidden>${answer}</p>
    <button class="show-answer">Show Answer</button>
    <ul class="categories">
      <li class="tag">#${tag}</li>
    </ul>
  `;
  formContainer.append(newCard);

  const showAnswerButton = newCard.querySelector(".show-answer");
  showAnswerButton.addEventListener("click", () => {
    const answerElement = newCard.querySelector(".answer");
    answerElement.hidden = !answerElement.hidden;
    showAnswerButton.textContent = answerElement.hidden
      ? "Show Answer"
      : "Hide Answer";
  });

  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
  document.getElementById("tag").value = "";
});

const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const questionChars = document.getElementById("question-chars");
const answerChars = document.getElementById("answer-chars");

const updateCharCount = (input, counter) => {
  const maxChars = input.getAttribute("maxlength");
  const charsLeft = maxChars - input.value.length;
  counter.textContent = `${charsLeft} characters left`;
};

questionInput.addEventListener("input", () =>
  updateCharCount(questionInput, questionChars)
);
answerInput.addEventListener("input", () =>
  updateCharCount(answerInput, answerChars)
);
