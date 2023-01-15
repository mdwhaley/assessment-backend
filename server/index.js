const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getQuote,
  getAffirmation,
  getDailyQuotes,
  deleteDailyQuote,
  changeDay,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/quote", getQuote);
app.get("/api/affirmation", getAffirmation);
app.get("/api/dailyQuotes", getDailyQuotes);
app.delete("/api/dailyQuotes/:id", deleteDailyQuote);
app.put("/api/dailyQuotes/:id", changeDay);

app.listen(4000, () => console.log("Server running on 4000"));
