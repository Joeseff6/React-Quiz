const Choices = ({ selectedQuestion, onChoiceClick, displayNextQuestion, updateScore }) => {
  const randomizeChoices = (choices) => {
    let choicesCopy = choices.slice(0);
    let choicesArray = [];
    while (choicesCopy.length !== 0) {
      let choiceLength = choicesCopy.length;
      let randomIndex = Math.floor(Math.random() * choiceLength);
      choicesArray.push(choicesCopy[randomIndex]);
      choicesCopy.splice(randomIndex, 1);
    }
    return choicesArray;
  };

  onChoiceClick = (e) => {
    let selectedChoice = e.target.innerText;
    let correctIndex = null;
    let choiceElements = document.querySelectorAll(`.choice`);
    choiceElements.forEach((element, index) => {
      if (element.innerText === selectedQuestion.answer)
        correctIndex = index;
    });
    document
      .querySelector(`.choice[data-index="${correctIndex}"]`)
      .classList.add("correct");
    let correct = selectedChoice === selectedQuestion.answer;
    setTimeout(() => {
      updateScore(correct);
      displayNextQuestion();
    }, 1000);
  };

  const renderChoices = () => {
    let choices = randomizeChoices(selectedQuestion.choices);
    return choices.map((choice, index) => {
      return (
        <div
          className="choice my-3 px-3 py-3 d-flex align-items-center"
          key={index}
          onClick={(e) => onChoiceClick(e)}
          data-index={index}
        >
          {choice}
        </div>
      );
    });
  };

  return (
    renderChoices()
  )
};

export default Choices;