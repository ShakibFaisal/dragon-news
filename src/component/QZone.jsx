import React from 'react';
import swimmingimg from '../assets/swimming.png' 
import classimg  from '../assets/class.png'
import playgroundimg from  '../assets/playground.png'
import bgimg from  '../assets/bg.png'

const QZone = () => {
    return (
        <div className='mt-5 bg-base-300 p-3'>
            <h3 className='font-bold mb-5'>Q-Zone</h3>
            <div className='flex flex-col items-center gap-5'>
                <img src={swimmingimg} alt="" />
                <img src={classimg} alt="" />
                <img src={playgroundimg} alt="" />
                <img src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default QZone;