import React from 'react';

const Gamer = () => {
    return (
        <div className='mt-20'>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50 p-6 rounded-2xl">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-4xl font-bold leading-none">Lokesh Gamer | Youtube </h1>
                        <p >I chose to work with Superbio because of their amazing and supportive <br />
                            team who shares those values. It’s an all-in-one platform that is really <br />
                            quick and easy to navigate. And is really aesthetically appealing.</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gamer;