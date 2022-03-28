import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'Users', url: '/users' },
  { title: 'Upload', url: '/upload' },
];

const Navbar: FC = () => {
  return (
    <nav style={{paddingBottom: "30px"}}>
      {navItems.map((item) => (
        <NavLink key={item.url} style={{ paddingRight: '10px' }} to={item.url}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
