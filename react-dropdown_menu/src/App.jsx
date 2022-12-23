import { useState } from 'react';
import './App.css';
import { DropdownMenu } from './DropdownMenu';
import { NavBar } from './NavBar';

function App() {
  const [isDropdownVisible, setisDropdownVisible] = useState(false);

  const handleShowDropdownMenu = (e) => {
    let isActive = e.target.ariaLabel === 'nav-item' ? true : false;
    setisDropdownVisible(isActive);
  };


  return (
    <div className='App' onClick={handleShowDropdownMenu}>
      <NavBar onClickItem={handleShowDropdownMenu} />
      {isDropdownVisible && <DropdownMenu />}
      {JSON.stringify(isDropdownVisible)}
    </div>
  );
}

export default App;
