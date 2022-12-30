import React from 'react';
import image from '../../file/Image 2.png'

const Image = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 mt-20 rounded-2xl">
            <div className="container flex flex-col mx-auto lg:flex-row" data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine">
                <div className="w-full lg:w-1/3 p-6"> <img src={image} alt="" /></div>
                <div className="flex flex-col justify-center w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <div>
                        <h1 className='text-3xl'>Try it for free</h1>
                    </div>
                    <p className="mt-4 mb-8 text-sm">Create your own meaningful link in bio <br />
                        today for free. Join for free!</p>
                    <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-blue-400 dark:text-gray-900">Get started</button>
                </div>
            </div>
        </section>
    );
};

export default Image;