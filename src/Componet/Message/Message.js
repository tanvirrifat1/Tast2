import React from 'react';
import image from '../../file/Screenshot.png'
import img from '../../file/Screenshot3.png'

const Message = () => {
    return (
        <div className='mt-10'>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div className='mr-10'>
                        <h1 className="text-5xl font-bold">Turn Followers into <br /> Customers</h1>
                        <p className="py-6">Create your custom storefront for your audiences with just one bio link. <br />
                            Your followers will never have to leave your socials to access
                            everything you have to offer.</p>
                        <button className="btn btn-info w-40 rounded-2xl text-white">SignUp Now</button>

                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Message;