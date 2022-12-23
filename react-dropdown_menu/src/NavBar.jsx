import { NavItem } from './NavItem';

export const NavBar = ({ onClickItem }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'right',
        gap: '10px',
        padding: '10px',
        backgroundColor: '#251749',
      }}
    >
      <NavItem onClickItem={onClickItem} />
      <NavItem onClickItem={onClickItem} />
      <NavItem onClickItem={onClickItem} />
    </div>
  );
};
