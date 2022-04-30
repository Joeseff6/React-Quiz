const selectQuestion = (questions) => {
  let numberOfQuestions = questions.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuestions);
  let selectedQuestion = questions[randomNumber];
  return selectedQuestion;
}

export default selectQuestion;