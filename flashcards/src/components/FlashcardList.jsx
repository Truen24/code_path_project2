import Flashcard from "./Flashcard";

const FlashcardList = ({ cards }) => {
    return (
        <div className="flashcard-list">
            {cards.map((card, index) => (
                <Flashcard key={index} card={card} />
            ))}
        </div>
    );
};

export default FlashcardList;
