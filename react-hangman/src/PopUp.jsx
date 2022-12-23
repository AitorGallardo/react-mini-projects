
export const PopUp = ({message, newGame}) => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh',zIndex: '1111'}}>
          
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100vh',
          backgroundColor: 'black',
          opacity: '0.8',
        }}
      ></div>
      <div
        style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          position: 'absolute',
          width: 'fit-content',
          heihgt: 'fit-content',
          fontSize: '100px',
          padding: '10px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
       {message} 
        <button style={{marginTop:'20px',cursor:'pointer',fontSize:'20px'}} onClick={()=>newGame()}>NEW GAME</button>
      </div>
    </div>
  );
};
