import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='lg:max-w-screen-xl mx-auto flex my-24 flex-col md:flex-col lg:flex-row gap-8'>
            <div className='w-full md:w-full lg:w-[50%]'>
                <img src="https://i.ibb.co/Wg312Hd/chinese-chef-alex-the-ritz-carlton-li-yen-kuala-lumpur-removebg-preview.png" alt="" />
            </div>
            <div className='mx-3 md:mx-3 flex flex-col justify-center items-center gap-5 w-[95%] md:w-[95%] lg:w-[50%]'>
                <h1 className='text-xl leading-10 md:text-2xl lg:text-2xl'>
                    For many, food is an experience. It is both a science and an art. It is meant to be savored and enjoyed.In a culture with such passion for food, it is no surprise that we also like talking about it.
                </h1>
                <div>
                <Link to="/blog"><button className='btn'>See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
