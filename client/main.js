const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const quotesBtn = document.getElementById("quotesButton");
const affirmationBtn = document.getElementById("affirmationButton");
const submitButton = document.getElementById("submitButton");

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
    const affirmationList = document.createElement("li");
    const deleteButton = document.createElement("button");
    const data = res.data;
    affirmation.appendChild(affirmationList);
    affirmationList.innerHTML = data;
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
quotesBtn.addEventListener("click", getQuote);
affirmationBtn.addEventListener("click", getAffirmation);
