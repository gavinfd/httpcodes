import Question from "./question";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outcome: undefined,
      questionIndex: 0,
      questionsOutcome: [],
      quizFinished: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (answer) => {
    let index = this.state.questionIndex;
    if (answer === this.props.questions.questions[index].rightAnswer) {
      this.setState({ outcome: true });
      let outcomes = this.state.questionsOutcome;
      outcomes.push(this.state.outcome);
      this.setState({ questionsOutcome: outcomes });
    } else {
      this.setState({ outcome: false });
      let outcomes = this.state.questionsOutcome;
      outcomes.push(this.state.outcome);
      this.setState({ questionsOutcome: outcomes });
    }
    if (answer === "next") {
      if (index + 1 === this.props.questions.questions.length) {
        this.setState({ quizFinished: true });
      } else {
        this.setState({ questionIndex: index + 1 });
        this.setState({ outcome: undefined });
      }
    }
  };

  render() {
    const { questions } = this.props;
    let question = questions.questions[this.state.questionIndex];
    return (
      <Question
        statusCode={question.statusCode}
        rightAnswer={question.rightAnswer}
        answers={question.randomAnswers}
        handleClick={this.handleClick}
        outcome={this.state.outcome}
        quizFinished={this.state.quizFinished}
        questionsOutcome={this.state.questionsOutcome}
      />
    );
  }
}

export default Quiz;
