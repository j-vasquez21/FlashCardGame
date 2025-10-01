import FlashCard from './components/FlashCard';
import { useState } from 'react';

function App() {

  const [currentCard, setCurrentCard] = useState(0);
  const [resetFlip, setResetFlip] = useState(false) // initally already front side


  function next() {
    setCurrentCard((lastCardIndex) => (lastCardIndex + 1) % questions.length);
    setResetFlip(true);
  }

  function previous() {
    setCurrentCard((lastCardIndex) => (lastCardIndex - 1 + questions.length) % questions.length);
    setResetFlip(true);
  }

  return (
    <>
      <p>Total number of cards: {questions.length}</p>
      <FlashCard
        key={questions[currentCard].id}
        id={questions[currentCard].id}
        hint={questions[currentCard].hint}
        image={questions[currentCard].image}
        options={questions[currentCard].options}
        answer={questions[currentCard].answer}
        resetFlip={resetFlip}
        setResetFlip={setResetFlip}
      />
      <div className="control-buttons">
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </>
  )
}

const questions = [
  {
    id: 1,
    hint: "Lionel Messi played in this team.",
    image: 'https://1000logos.net/wp-content/uploads/2016/10/Barcelona-Logo.png',
    options: ['FC Barcelona', 'Real Madrid', 'Manchester United', 'Arsenal'],
    answer: '1'
  },
  {
    id: 2,
    hint: 'A club in Portugal',
    image: 'https://1000logos.net/wp-content/uploads/2020/09/Porto-logo.png',
    options: ['Manchester City', 'Bayern Munich', 'Manchester United', 'FC Porto'],
    answer: '4'
  },
  {
    id: 3,
    hint: 'The only Italian club to never have been relegated',
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Inter-Milan-logo.png',
    options: ['Napoli', 'Juventus', 'Inter Milan', 'AC Milan'],
    answer: '3'
  },
  {
    id: 4,
    hint: 'This country won the most World Cups',
    image: 'https://1000logos.net/wp-content/uploads/2025/06/Brazilian-Football-Confederation-Logo.png',
    options: ['Germany', 'Brazil', 'Argentina', 'Uruguay'],
    answer: '2'
  },
  {
    id: 5,
    hint: 'The most Champions League titles',
    image: 'https://1000logos.net/wp-content/uploads/2020/09/Real-Madrid-logo.png',
    options: ['Inter Milan', 'PSG FC', 'Real Mardrid', 'Chelsea'],
    answer: '3'
  },
  {
    id: 6,
    hint: 'Bitter rivals of Club Atletico Boca Juniors',
    image: 'https://images.seeklogo.com/logo-png/11/1/river-plate-escudo-logo-png_seeklogo-118824.png',
    options: ['River Plate', 'Estudiantes', 'Racing', 'San Lorenzo'],
    answer: '1'
  },
  {
    id: 7,
    hint: 'Home stadium is called Estadio Azteca',
    image: 'https://1000logos.net/wp-content/uploads/2021/12/Club-America-Logo.png',
    options: ['C.D. Guadalajara', 'Cruz Azul', 'Club America', 'Pumas UNAM'],
    answer: '3'
  },
  {
    id: 8,
    hint: 'Winner of the 2024-2025 Champions League',
    image: 'https://1000logos.net/wp-content/uploads/2018/05/PSG-Logo.png',
    options: ['Inter Milan', 'PSG FC', 'Arsenal', 'FC Barcelona'],
    answer: '2'
  }
]

export default App
