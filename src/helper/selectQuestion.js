const selectQuestion = (questions) => {
  let numberOfQuestions = questions.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuestions);
  let selectedQuestion = questions[randomNumber];
  selectedQuestion.index = randomNumber;
  return selectedQuestion;
}

export default selectQuestion;