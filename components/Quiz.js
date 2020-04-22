import Question from "./question";


class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: false,
            questionIndex: 0,
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick= (answer) => {
        console.log(answer);
        let index = this.state.questionIndex;
        if (answer === this.props.questions.questions[index].rightAnswer){
            if (index+1 === this.props.questions.questions.length) {
                this.setState({correct: true})
            }
            else {
                this.setState({questionIndex: index + 1})
            }
        }
    };

    render() {
        const {
          questions
        } = this.props;
        let question = questions.questions[this.state.questionIndex];
        return(
            <Question
            statusCode={question.statusCode}
            rightAnswer={question.rightAnswer}
            answers={question.randomAnswers}
            handleClick={this.handleClick}
            outcome={this.state.correct}
            />
        )};
}

export default Quiz;
