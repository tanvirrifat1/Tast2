import React from 'react';
import './Login.css'
import img from '../../file/Image 1.png'

const Login = () => {
    return (
        <div className='mt-14'>
            <section >
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center ">
                        <div className='dark:bg-gray-800 dark:text-gray-100 rounded-xl '>
                            <div className="mt-12 space-y-12">
                                <div className="ml-4 ">
                                    <h4 className="text-4xl mt-3 font-medium leading-6 dark:text-gray-50">Amplify Your Earning Potential.</h4>
                                    <p className="mt-2 dark:text-gray-400">Our exceptional monetization tools allow you to turn your socials
                                        into a storefront and your followers into potential customers.</p>
                                </div>
                                <div className="flex">

                                    <div className="ml-4 ">
                                        <h4 className="text-4xl mt-3 font-medium leading-6 dark:text-gray-50">Say more, sell more, share more</h4>
                                        <p className="mt-2 dark:text-gray-400">Connect your followers to all you offer from your link in bio
                                            with a Superbio website.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">

                                    </div>
                                    <div className="ml-4 ">
                                        <h4 className="text-4xl mt-3 font-medium leading-6 dark:text-gray-50">Make it happen</h4>
                                        <p className="mt-2 dark:text-gray-400">Use an Superbio website to start, launch or grow business ideas,
                                            passion projects, and promotions.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">

                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h4 className="text-4xl mt-3 font-medium leading-6 dark:text-gray-50">Fun, easy, beautiful, instant</h4>
                                        <p className="mt-2 dark:text-gray-400">Make and update a Superbio website in minutes.
                                            No desktops, design, or web skills are needed!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src={img} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 size" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Login;