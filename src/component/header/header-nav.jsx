import React from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../data';

const HeaderNav = () => {
  
  return (
    <div className="container">
      <nav className="flex justify-between bg-gray py-4">
        {navbarData.map((el) => (
          <Link
            key={el.id}
            to={`/products/${el.href}`}>
            {el.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderNav;
