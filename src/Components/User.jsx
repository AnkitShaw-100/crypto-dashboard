import React from 'react';
import SpiderMan from '../assets/spider_man.png';

const User = () => {
    return (
        <div className="p-6 bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 text-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center mb-8">
                    <img 
                        src={SpiderMan} 
                        alt="User Profile Picture" 
                        className="w-32 h-32 rounded-full mb-4 border-4 border-gray-700 object-cover"
                    />
                    <h1 className="text-4xl font-bold mb-2">User Name</h1>
                    <p className="text-lg font-medium opacity-80">user@example.com</p>
                </div>
                <div className='flex gap-6 ml-18'>
                    <div className="mb-8"></div>
                <div className=" mb-8">
                    <div ></div>
                        <p className="text-lg font-medium opacity-80">Max Loss in a Day</p>
                        <p className="text-3xl font-bold text-red-500">-$2,000</p>
                    </div>
                    <div >
                        <p className="text-lg font-medium opacity-80">Max Gain in a Day</p>
                        <p className="text-3xl font-bold text-green-500">$3,000</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium opacity-80">Total PnL</p>
                        <p className="text-3xl font-bold text-yellow-500">$1,000</p>
                    </div>
                </div>
                </div>
            </div>
        
    );
}

export default User;
