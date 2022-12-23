import { useState } from "react";

export const NavItem = ({onClickItem}) => {
  const [isHovering, setIsHovering] = useState(false)
  const handleClick = (e)=>{
    e.stopPropagation()
    onClickItem(e)
  }
  const handleMouseEnter = () =>{
   setIsHovering(true) 
  }
  const handleMouseLeave = () =>{
   setIsHovering(false) 
  }
  return (
    <div aria-label="nav-item" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: '50%',
        backgroundColor: '#263159',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        transform: isHovering ? 'scale(1.1)':''
        
      }}
    ></div>
  );
};
