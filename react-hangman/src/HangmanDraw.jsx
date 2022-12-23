const ROPE = () => {
  return (
    <div
      style={{
        height: '50px',
        width: '10px',
        background: 'black',
        position: 'absolute',
        top: '0',
        right: '0',
      }}
    ></div>
  );
};
const HEAD = () => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid green',
        position: 'absolute',
        top: '50px',
        right: '-30px',
      }}
    ></div>
  );
};
const BODY = () => {
  return (
    <div
      style={{
        width: '0px',
        height: '100px',
        border: '5px solid green',
        position: 'absolute',
        top: '110px',
        right: '0px',
      }}
    ></div>
  );
};

const RIGHT_ARM = () => {
  return (
    <div
      style={{
        width: '40px',
        height: '0px',
        border: '5px solid green',
        position: 'absolute',
        top: '160px',
        right: '-40px',
        transform: 'rotate(40deg)',
      }}
    ></div>
  );
};
const LEFT_ARM = () => {
  return (
    <div
      style={{
        width: '40px',
        height: '0px',
        border: '5px solid green',
        position: 'absolute',
        top: '160px',
        right: '0px',
        transform: 'rotate(-40deg)',
      }}
    ></div>
  );
};
const RIGHT_LEG = () => {
  return (
    <div
      style={{
        width: '50px',
        height: '0px',
        border: '5px solid green',
        position: 'absolute',
        top: '210px',
        right: '-50px',
        transformOrigin: 'left',
        transform: 'rotate(40deg)',
      }}
    ></div>
  );
};
const LEFT_LEG = () => {
  return (
    <div
      style={{
        width: '50px',
        height: '0px',
        border: '5px solid green',
        position: 'absolute',
        top: '210px',
        right: '0px',
        transformOrigin: 'right',
        transform: 'rotate(-40deg)',
      }}
    ></div>
  );
};
export const HangmanDraw = ({errors}) => {
  return (
    <div style={{ position: 'relative' }}>
      {errors.length >= 3 &&<BODY />}
      {errors.length >= 2 &&<HEAD />}
      {errors.length >= 5 &&<RIGHT_ARM />}
      {errors.length >= 4 &&<LEFT_ARM />}
      {errors.length >= 6 &&<RIGHT_LEG />}
      {errors.length >= 7 &&<LEFT_LEG />}
      {errors.length >= 1 &&<ROPE />}
      <div
        style={{
          height: '10px',
          width: '125px',
          background: 'black',
          marginLeft: '125px',
        }}
      ></div>
      <div
        style={{
          height: '400px',
          width: '10px',
          background: 'black',
          marginLeft: '125px',
        }}
      ></div>
      <div
        style={{ height: '10px', width: '250px', background: 'black' }}
      ></div>
    </div>
  );
};
