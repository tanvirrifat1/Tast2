import React from 'react';
import image from '../../file/Image 2.png'

const Image = () => {
    return (
        <div className=" p-4 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 mt-20">
            <div className=" w-full mb-6  sm:h-32 sm:w-32 sm:mb-0">
                <img src={image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
            </div>

            <div className='ml-10'>
                <h2 className="text-4xl font-semibold">Try it for free</h2>
                <span className="text-sm dark:text-gray-400">Create your own meaningful link in bio <br />
                    today for free. Join for free!</span> <br />
                <button className="btn bg-blue-400 text-white rounded-2xl">Get Started</button>

            </div>
        </div>
    );
};

export default Image;