const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const quotesBtn = document.getElementById("quotesButton");
const affirmationBtn = document.getElementById("affirmationButton");
const inspiration = document.getElementById("inspiration");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
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
  axios.get("http://localhost:4000/api/quote/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getAffirmation = () => {
  axios.get("http://localhost:4000/api/affirmation/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
quotesBtn.addEventListener("click", getQuote);
affirmationBtn.addEventListener("click", getAffirmation);
