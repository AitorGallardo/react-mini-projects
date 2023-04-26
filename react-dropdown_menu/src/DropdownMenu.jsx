import { useState } from 'react';
import { DropdownItem } from './DropdownItem';
import './DropdownMenu.css'

const DropdownSettings = ({ onClickItem }) => {
  return (
    <div className='slide-in-left'>
      <DropdownItem title='Back' onClickItem={onClickItem}/>
      <DropdownItem title='Setting n.1' />
      <DropdownItem title='Setting n.2' />
      <DropdownItem title='Setting n.3' />
    </div>
  );
};

const DropDownDefault = ({ onClickItem }) => {
  return (
    <div className='slide-in-right'>
      <DropdownItem title='My profile'  />
      <DropdownItem title='Settings' hasMoreInfo={true} onClickItem={onClickItem} />
      <DropdownItem title='Animals' />
    </div>
  );
};

export const DropdownMenu = ({}) => {
  const [menuStates, setMenuStates] = useState({
    def: true,
    settings: false,
    animals: false,
  });

  const handleClickItem = (event, item) => {
    console.log('CLICK', item);
    event.stopPropagation();
    switch (item.toLowerCase()) {
      case 'settings':
        setMenuStates({
          def: false,
          animals: false,
          settings: true,
        });

        break;
      case 'back':
        setMenuStates({
          def: true,
          animals: false,
          settings: false,
        });
        break;
      default:
        return;
    }
  };
  return (
    <div className='main'>
      {menuStates.def && <DropDownDefault  onClickItem={handleClickItem} />}
      {menuStates.settings && <DropdownSettings onClickItem={handleClickItem} />}
      {menuStates.animals && <DropDownDefault />}
    </div>
  );
};
