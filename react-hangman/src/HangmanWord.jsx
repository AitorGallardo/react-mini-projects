
const WordCharacter = ({isVisible, character}) => {
  return (
    <div className='word__character'>
     {isVisible && <div className='content'>{character}</div> }       
     <div className='bottomLine' />
    </div>
  );
};

const answeredCharacter = (index,occurrences)=>{
  if(!occurrences.length>0) return false;
  // if(occurrences.length>0) return true;
  return occurrences.includes(index);
}
 
export const HangmanWord = ({ word, occurrences }) => {

  return (
    <div className='word__container'>
      {word &&
        word
          .split('')
          .map((character, index) => (
            <WordCharacter key={index} isVisible={answeredCharacter(index,occurrences)} character={character}/>
          ))}
    </div>
  );
};
