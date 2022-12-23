const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
export const Keyboard = ({ selectedCharacter, clickedCharacters}) => {
  const handleClick = (character) => {
    if (!clickedCharacters.includes(character)) {
      selectedCharacter(character);
    }
  };
  return (
    <div className='keyboard'>
      {alphabet.map((character, index) => (
        <div
          key={index}
          className={
            clickedCharacters.includes(character)
              ? 'keyboard__character-clicked'
              : 'keyboard__character'
          }
          onClick={() => handleClick(character)}
        >
          {character}
        </div>
      ))}
    </div>
  );
};
