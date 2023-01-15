const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const quotesBtn = document.getElementById("quotesButton");
const affirmationBtn = document.getElementById("affirmationButton");
const submitButton = document.getElementById("submitButton");
const quotesContainer = document.getElementById("daysContainer");
const quoteSubmit = document.getElementById("quoteSubmit");
const customQuoteText = document.getElementById("#customQuote");
const form = document.querySelector("form");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getQuote = () => {
  axios.get("http://localhost:4000/api/quote").then((res) => {
    const inspiration = document.getElementById("inspiration");
    const inspirationList = document.createElement("h4");
    const deleteButton = document.createElement("button");
    const data = res.data;
    inspiration.appendChild(inspirationList);
    inspirationList.innerHTML = data;
  });
};

const getAffirmation = () => {
  axios.get("http://localhost:4000/api/affirmation/").then((res) => {
    const affirmation = document.getElementById("affirmation");
    const affirmationList = document.createElement("h4");
    const deleteButton = document.createElement("button");
    const data = res.data;
    affirmation.appendChild(affirmationList);
    affirmationList.innerHTML = data;
  });
};

const quotesCallback = ({ data: dailyQuotes }) => displayQuotes(dailyQuotes);
//const errCallback = (err) => console.log(err.response.data);

const getAllQuotes = () =>
  axios.get("http://localhost:4000/api/dailyQuotes/").then(quotesCallback);
//.catch(errCallback);

const deleteDailyQuote = (id) =>
  axios
    .delete(`http://localhost:4000/api/dailyQuotes/${id}`)
    .then(quotesCallback);

const createQuote = (body) =>
  axios
    .post("http://localhost:4000/api/dailyQuotes", body)
    .then(quotesCallback);

const changeDay = (id, type) =>
  axios
    .put(`http://localhost:4000/api/dailyQuotes/${id}`, { type })
    .then(quotesCallback);

function submitHandler(e) {
  e.preventDefault();

  let quote = document.querySelector("#customQuote");

  let bodyObj = {
    quote: quote.value,
  };

  createQuote(bodyObj);

  quote.value = "";
}

function createQuoteCard(quote) {
  const quoteCard = document.createElement("div");
  quoteCard.classList.add("quote-card");

  quoteCard.innerHTML = `
  <p class="quote-title">${quote.quote}</p>
  <div class="btns-container">
      <button onclick="changeDay(${quote.id}, 'minus')">-</button>
      <p class="quote-day">${quote.day} </p>
      <button onclick="changeDay(${quote.id}, 'plus')">+</button>
  </div>
  <button onclick="deleteDailyQuote(${quote.id})">delete</button>
  `;

  quotesContainer.appendChild(quoteCard);
}

function displayQuotes(arr) {
  daysContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createQuoteCard(arr[i]);
  }
}

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
quotesBtn.addEventListener("click", getQuote);
affirmationBtn.addEventListener("click", getAffirmation);
form.addEventListener("submit", submitHandler);

getAllQuotes();
