import { useState } from "react";
import Flashcard from "./components/Flashcard";
import CardControls from "./components/CardControls";
import "./index.css";

const flashcardsData = [
    { question: "Who wears #3?", answer: "Derwin James" },
    { question: "Who wears #0?", answer: "Daiyan Henley" },
    { question: "Who wears #76?", answer: "Joe Alt" },
    { question: "Who wears #70?", answer: "Rashawn Slater" },
    { question: "Who wears #15?", answer: "Ladd McConkey" },
    { question: "Who wears #12?", answer: "Derius Davis" },
    { question: "Who wears #44?", answer: "Scott Matlock" },
    { question: "Who wears #29?", answer: "Tarheeb Still" },
    { question: "Who wears #20?", answer: "Cam Hart" },
    { question: "Who wears #32?", answer: "Alohi Gilman" },
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetTrigger, setResetTrigger] = useState(0); // Used to trigger reset

    const checkAnswer = (userInput, correctAnswer) => {
        return userInput.trim().toLowerCase() === correctAnswer.toLowerCase();
    };

    const handleCardChange = (newIndex) => {
        setCurrentIndex(newIndex);
        setResetTrigger((prev) => prev + 1); // Update to trigger reset in Flashcard
    };

    return (
        <div className="app">
            <h1>Charger Football Knowledge Flash Cards</h1>
            <p>Total Number of Cards: {flashcardsData.length}</p>
            <Flashcard 
                card={flashcardsData[currentIndex]} 
                checkAnswer={checkAnswer} 
                resetTrigger={resetTrigger} 
            />
            <CardControls 
                cards={flashcardsData} 
                currentIndex={currentIndex} 
                setCurrentIndex={handleCardChange} 
            />
        </div>
    );
}

export default App;
