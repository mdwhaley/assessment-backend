let quotes = [
  "Don’t limit your challenges. Challenge your limits.",
  "Dreams don’t work unless you do.",
  "Focus on being productive instead of busy.",
  "You’re so much stronger than your excuses.",
  "You can do anything you set your mind to.",
];

const affirmation = [
  "I'm good enough, I'm smart enough, and doggone it, people like me.",
  "That's just stinkin' thinkin!",
  "You're should-ing all over yourself",
  "I am a worthy human being",
  "Trace it, face it, and erase it",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "Adventure can be real happiness.",
      "Bide your time, for success is near.",
      "Failure is the path of lease persistence.",
      "Happy life is just in front of you.",
      "Self-knowledge is a life long process.",
      "The philosophy of one century is the common sense of the next.",
      "Your dreams are worth your best efforts to achieve them.",
    ];
    // choose random fortunes
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  getQuote: (req, res) => {
    // choose random quotes
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    res.status(200).send(randomQuote);
    quotes.splice(randomIndex, 1);
  },

  getAffirmation: (req, res) => {
    // choose random affirmation
    let randomIndex = Math.floor(Math.random() * affirmation.length);
    let randomAffirmation = affirmation[randomIndex];
    res.status(200).send(randomAffirmation);
    affirmation.splice(randomIndex, 1);
  },
};
