import React from 'react';

const Use = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50 p-6 rounded-2xl">
            <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-none">Use it anywhere</h1>
                    <p >Take your Superbio link wherever your audience is, <br />
                        to help them to discover all your important content.</p>
                    <button className='btn w-40 rounded-2xl bg-blue-400 text-white'>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Use;