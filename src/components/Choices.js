const Choices = ({ selectedQuestion }) => {
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

  const renderChoices = () => {
    let choices = randomizeChoices(selectedQuestion.choices);
    return choices.map((choice, index) => {
      return (
        <div
          className="choice my-3 px-3 py-3 d-flex align-items-center"
          key={index}
          onClick={(e) => this.onChoiceClick(e)}
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
