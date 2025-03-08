import { useState } from "react";

const Flashcard = ({ card }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
            <h2>{showAnswer ? card.answer : card.question}</h2>
        </div>
    );
};

export default Flashcard;
