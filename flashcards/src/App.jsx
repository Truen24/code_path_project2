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
    const [currentCard, setCurrentCard] = useState(flashcardsData[0]);

    return (
        <div className="app">
            <h1>Charger Football Knowledge Flash Cards</h1>
            <p>Total Number of Cards: 10</p>
            <Flashcard card={currentCard} />
            <CardControls cards={flashcardsData} setCurrentCard={setCurrentCard} />
        </div>
    );
}

export default App;
