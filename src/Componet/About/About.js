import React from 'react';

const About = () => {
    return (
        <div className='mt-20'>
            <div>
                <section className="py-6 dark:bg-gray-800 dark:text-gray-50 p-6 rounded-2xl">
                    <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                        <div className="flex flex-col space-y-4 text-center lg:text-left">
                            <h1 className="text-4xl font-bold leading-none">About</h1>
                        </div>
                    </div>
                </section>
            </div>
            <div className='flex justify-center gap-8 -mt-6 '>
                <div className="card w-96 bg-neutral rounded-2xl  dark:bg-gray-900">
                    <div className="card-body">
                        <h2 className="card-title">Customize your <br />
                            Link</h2>
                        <p>Make your superbio pop.
                            Embody your brand through
                            custom colors, fonts
                            and images.</p>

                    </div>
                </div>
                <div className="card w-96 bg-neutral rounded-2xl  dark:bg-gray-900">
                    <div className="card-body ">
                        <h2 className="card-title">Analytics and <br />
                            Insights</h2>
                        <p>Gain valuable insight into
                            your traffic and discover
                            which content is performing
                            with your audience.</p>

                    </div>
                </div>
                <div className="card w-96 bg-neutral rounded-2xl  dark:bg-gray-900">
                    <div className="card-body ">
                        <h2 className="card-title">Powerful Third-Party <br />
                            Integrations</h2>
                        <p>Collect email subscribers,
                            connect with third-party
                            analytics and remarket to
                            your audience.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;