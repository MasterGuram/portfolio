import React from 'react';
import github from '../assets/github-240.png';
import vscode from '../assets/vs-code-240.png';
import replit from '../assets/replit-240.png';
import photoshop from '../assets/photoshop-240.png';
import figma from '../assets/figma-240.png';
import webstorm from '../assets/webstorm.png'

const techss = [
    {
        id: 1,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-500'
    },
    {
        id: 2,
        src: vscode,
        title: 'VS Code',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: replit,
        title: 'Replit',
        style: 'shadow-orange-500'
    },
    {
        id: 4,
        src: photoshop,
        title: 'Photoshop',
        style: 'shadow-blue-600'
    },
    {
        id: 5,
        src: figma,
        title: 'Figma',
        style: 'shadow-violet-600'
    },   
    {
        id: 6,
        src: webstorm,
        title: 'WebStorm',
        style: 'shadow-blue-300'
    }, 
  ]


const Tools = () => {
  return (
    <div name='tools' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
            <div className='pt-16'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Tools</p>
                <p className='py-6'>These are the tools I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techss.map(({id, src, title, style}) => (
                        <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }


            </div>
        </div>
    </div>
  )
}

export default Tools