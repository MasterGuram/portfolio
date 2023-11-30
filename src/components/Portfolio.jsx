import React from 'react';
import Vegetables from '../assets/p_1.png';
import Burgers from '../assets/p_2.png';
import TipsCalcualator from '../assets/Tips_Calculator.png';
import Rock from '../assets/Rock.png';
import SuperHero from '../assets/Super_Hero.png';
import Bananas from '../assets/Bananas.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Vegetables
        },
        {
            id: 2,
            src: Burgers
        },
        {
            id: 3,
            src: TipsCalcualator
        },
        {
            id: 4,
            src: Rock
        },
        {
            id: 5,
            src: SuperHero
        },
        {
            id: 6,
            src: Bananas
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pt-3'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'> 
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </div>
                    </div>
                ))
            }

            </div>
        </div>
    </div>
  );
};

export default Portfolio