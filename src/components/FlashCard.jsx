import { useState } from "react";

function FlashCard(props) {
    const [flipped, setFlipped] = useState(false);

    function handleAnswer(optionIndex) {
        if (String(optionIndex + 1) === props.answer) {
            setFlipped(true);
        }
    }

    return (
        <div className={`card ${flipped ? "flipped" : ""}`} id={props.id}>
            <div className="front">
                <h2>Hint: {props.hint}</h2>
                <img src={props.image} alt="team logo" />
                <div className="options-container">
                    {props.options.map((option, i) => (<button key={i} className="option" onClick={() => handleAnswer(i)}>{option}</button>))}
                </div>
            </div>
            <div className="back">
                <h2>Correct!</h2>
                <img src={props.image} alt="team logo" />
                <h3>{props.options[Number(props.answer) - 1]}</h3>
            </div>
        </div>
    );
}

export default FlashCard;