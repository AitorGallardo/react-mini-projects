import { useEffect, useState, useRef } from 'react';
import { HangmanDraw, HangmanWord, Keyboard, PopUp } from './';
import { useGetWord } from './hooks/useGetWord';

const MAXERRORS = 7;
export const App = () => {
  const [errors, setErrors] = useState([]);
  const [messagePopUp, setMessagePopUp] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  const isFirstSelectedCharacter = useRef(true); // Used with useEffect to check first render

  const { word, occurrences, setOccurrences, updateWord } = useGetWord();

  useEffect(() => {
    if (errors.length >= 7) {
      setShowPopUp(true);
      gameLost();
    }
  }, [errors]);

  useEffect(() => {
    if (isFirstSelectedCharacter.current && word && occurrences) {
      isFirstSelectedCharacter.current = false;
      const defaultCharacterOnStartGame = word.split('').at(occurrences[0]);
      setClickedCharacters([...clickedCharacters, defaultCharacterOnStartGame]);
    }

    if (word && occurrences.length === word.length) {
      gameWon();
    }
  }, [occurrences]);

  const gameLost = () => {
    setMessagePopUp('YOU LOST!');
    setShowPopUp(true);
  };
  const gameWon = () => {
    setMessagePopUp('YOU WON!');
    setShowPopUp(true);
  };

  const resetGame = () => {
    setShowPopUp(false);
    setClickedCharacters([]);
    setOccurrences([]);
    setErrors([]);
    updateWord();
    isFirstSelectedCharacter.current = true;
  };

  const lookForOcurrences = (character) => {
    setClickedCharacters([...clickedCharacters, character]);

    const guessedCharacters = word
      .split('')
      .map((e, index) => (e === character ? index : ''))
      .filter(String);

    if (guessedCharacters.length > 0) {
      setOccurrences(() => [...occurrences, ...guessedCharacters]);
    } else {
      setErrors([...errors, true]);
      console.log('ERRORS', errors);
    }
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <h1>{word}</h1>
      {showPopUp && <PopUp message={messagePopUp} newGame={resetGame} />}
      <HangmanDraw errors={errors} />
      <HangmanWord word={word} occurrences={occurrences} />
      <Keyboard
        selectedCharacter={lookForOcurrences}
        clickedCharacters={clickedCharacters}
      />
    </div>
  );
};
