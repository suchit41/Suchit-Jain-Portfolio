import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { NavLink } from 'react-router-dom';
import { logo, menu, close } from '../assets'

import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [Toggle, setToggle] = useState(false);
  return (
    <nav
      className={'${styles.paddingX} w-full flex items-centre py-5 fixed top-0 z-20 bg-primary'}>
      <div className='w-full flex justify-between items-centre max-w-7xl mx-auto'>
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          {<p className="text-white text-[18px] font-bold  cursor-pointer flex">Suchit &nbsp; <span className="sm:block hidden"> | JAVA mystery </span> </p> /*//&nbsp is unicode space character */}
        </Link>
        <ul className='list-node hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() =>
                setActive(Link.title)
              }
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={Toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px]
  object-contain cursor-pointer'
            onClick={() => setToggle(!Toggle)}
          ></img>
          <div className={`${!Toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 
  right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}>
            <ul className='list-none flex  justify-end items-start flex-col gsp-4'>
              {navLinks.map((Link) => (
                <li key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!Toggle);
                    setActive(Link.title)
                  }
                  }
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>




          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar