import { useState, useEffect } from "react";

const Flashcard = ({ card, checkAnswer, resetTrigger }) => {
    const [userInput, setUserInput] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        setUserInput("");
        setShowAnswer(false);
        setFeedback(null);
    }, [resetTrigger]);

    const handleSubmit = () => {
        const isCorrect = checkAnswer(userInput, card.answer);
        setFeedback(isCorrect ? "Correct!" : "Incorrect!");
        setShowAnswer(true);
    };

    return (
        <div className="flashcard">
            <h2>{showAnswer ? card.answer : card.question}</h2>
            {!showAnswer && (
                <div>
                    <input
                        type="text"
                        placeholder="Type your answer..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
            {feedback && <p className="feedback">{feedback}</p>}
        </div>
    );
};

export default Flashcard;
