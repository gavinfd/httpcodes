

const QuizButton = props => {
    console.log(props);
    const { handleClick, answer } = props;
    return (
        <button
            className="card"
            id={answer}
            onClick={handleClick}>
            <p>{answer}</p>
        </button>
    )
}

export default QuizButton;
