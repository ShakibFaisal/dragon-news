import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center pt-5'>
                <img className='w-[70%] md:w-[470px]'  src={logo} alt="" />
            </div>
            <p className='text-center mt-3.5 text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-center mt-3.5 text-accent  font-bold'>{format(new Date(),"EEEE, MMMM d, y" )}</p>
        </div>
    );
};

export default Header;