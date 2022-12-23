import { useEffect, useRef, useState } from 'react';

const getRandomWord = (array) => {
  if(!array || array.length === 0){
    console.warn(`Error with the 'Words Array'`, array)    
    return;
  } 
  const randomNumber = Math.floor(Math.random() * array.length);
  const randomWord = array.at(randomNumber);
  return randomWord;
};
const getRandomCharacter = (word) => {
  if(!word || word.length === 0){
    console.warn(`Error with the 'Word String'`, word)    
    return;
  } 
  const randomNumber = Math.floor(Math.random() * word.length);
  const arrWord = word.split('');
  const randomChar = arrWord.at(randomNumber);
  // We check if the character is repeated in the word
  return arrWord
    .map((c, index) => (c === randomChar ? index : ''))
    .filter(String);
};



export const useGetWord = () => {

  const [word, setWord] = useState(null);
  const [occurrences, setOccurrences] = useState([]);
  const [allWords, setAllWords] = useState([]);
  const isFirstRender = useRef(true) // Used with useEffect to check first render

  const updateWord = () => {
      const word = getRandomWord(allWords);
      const occurrences = getRandomCharacter(word);
      setWord(word);
      setOccurrences(occurrences);
  };

  useEffect(() => {
    fetch('./src/assets/words.txt')
      .then((r) => r.text())
      .then((text) => {
        setAllWords(text.split('\n'));
      });
  }, []);

  // We wait till the array is filled to do the work
  useEffect(() => {
      if(isFirstRender.current){
        isFirstRender.current = false;
        return; 
      }
        updateWord();
  }, [allWords]);

  return { word, occurrences, setOccurrences, updateWord };
};
