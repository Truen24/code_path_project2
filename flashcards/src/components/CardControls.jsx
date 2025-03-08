import { useState } from "react";

const CardControls = ({ cards, setCurrentCard }) => {
    const handleNextCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentCard(cards[randomIndex]);
    };

    return <button onClick={handleNextCard}>Next Card</button>;
};

export default CardControls;
