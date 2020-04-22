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

  renderButtons = () => {
    let otheranswers = this.shuffleArray([
      ...this.props.answers,
      this.props.rightAnswer,
    ]);
    otheranswers = this.shuffleArray(otheranswers);
    return otheranswers.map((answer) => (
      <button
        className="card"
        id={answer}
        onClick={() => this.props.handleClick(answer)}
      >
        <p>{answer}</p>
      </button>
    ));
  };

  render() {
    return !this.props.outcome ? (
      <div>
        <p className="description">
          What does the status code <code>{this.props.statusCode}</code> mean?
        </p>

        <div className="grid">{this.renderButtons()}</div>
      </div>
    ) : (
      <div>
        <p> Good job! </p>
      </div>
    );
  }
}

export default Question;
