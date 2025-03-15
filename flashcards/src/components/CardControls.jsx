const CardControls = ({ cards, currentIndex, setCurrentIndex }) => {
    const handleNextCard = () => {
        setCurrentIndex((currentIndex + 1) % cards.length);
    };

    const handlePrevCard = () => {
        setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="controls">
            <button onClick={handlePrevCard}>⬅ Back</button>
            <button onClick={handleNextCard}>Next ➡</button>
        </div>
    );
};

export default CardControls;
