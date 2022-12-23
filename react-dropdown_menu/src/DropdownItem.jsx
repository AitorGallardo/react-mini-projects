import { useState } from 'react';

const Arrow = () => {
  return (
    <div style={{marginLeft: 'auto'}}>
      <div
        style={{ backgroundColor: 'white', width: '10px', height: '2px',transformOrigin: 'right',transform: 'translateY(1px) rotate(30deg)' }}
      ></div>
      <div
        style={{ backgroundColor: 'white', width: '10px', height: '2px', transformOrigin: 'right',transform: 'translateY(-1px) rotate(-30deg)'}}
      ></div>
    </div>
  );
};
export const DropdownItem = ({ title, onClickItem, hasMoreInfo = false }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        minWidth: '200px',
        cursor: 'pointer',
        borderRadius: '14px',
        backgroundColor: isHovering ? 'rgb(46, 26, 98)' : '',
      }}
      onClick={(e)=>onClickItem(e,title)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id='icon'
        style={{
          borderRadius: '50%',
          backgroundColor: '#263159',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
        }}
      ></div>
      <p
        style={{
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
        id='text'
      >
        {title}
      </p>
      {hasMoreInfo && <Arrow />}

    </div>
  );
};
