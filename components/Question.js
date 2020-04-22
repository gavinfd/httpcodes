import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  getClassName = (displayAnswers, answer) => {
    if (!displayAnswers) {
      return "card";
    }
    if (answer == this.props.rightAnswer) {
      return "card-right";
    }
    return "card-wrong";
  };

  renderButtons = () => {
    let otheranswers = this.shuffleArray([
      ...this.props.answers,
      this.props.rightAnswer,
    ]);
    otheranswers = this.shuffleArray(otheranswers);
    let diasbleButtons = this.props.outcome !== undefined;
    return otheranswers.map((answer) => (
      <button
        className={this.getClassName(diasbleButtons, answer)}
        id={answer}
        onClick={() => this.props.handleClick(answer)}
        disabled={diasbleButtons}
      >
        <p>{answer}</p>
      </button>
    ));
  };

  getButtons = () => {
    let displayNext = this.props.outcome !== undefined;
    return (
      <div>
        <p className="description">
          What does the status code <code>{this.props.statusCode}</code> mean?
        </p>
        <div className="grid">{this.renderButtons()}</div>
        {displayNext ? (
          <div>
            <button
              className="card"
              onClick={() => this.props.handleClick("next")}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    );
  };

  getOutcomeCount = () => {
    let outcomes = this.props.questionsOutcome;
    let right = 0;
    let wrong = 0;
    outcomes.forEach((outcome) => (outcome ? right++ : wrong++));
    return `${right}/${wrong}`;
  };

  render() {
    return !this.props.quizFinished ? (
      <div>{this.getButtons()}</div>
    ) : (
      <div>
        <p>{this.getOutcomeCount()}</p>
      </div>
    );
  }
}

export default Question;
