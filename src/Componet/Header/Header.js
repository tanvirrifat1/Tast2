import React from 'react';
import image from '../../file/Group 1.png'

const Header = () => {
    return (
        <div className='mt-6'>
            <div className="navbar text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img className='h-10 w-10 mr-2' src={image} alt="" /> SuperBio</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a>Blog</a></li>
                        <li className='text-blue-400'><a>LogIn</a></li>
                        <li className='bg-blue-700 rounded-lg'><a>SignUp</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;