import React, { useState } from 'react' 
import './styles/Counterprogram.css'

function CounterProgram() {
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Counter Program</h1>
                <p className="text-5xl font-semibold text-blue-600 mb-6">{count}</p>
                <div className="flex space-x-4">
                    <button 
                    onClick={increment} 
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                    Increment
                    </button>
                    <button 
                    onClick={decrement} 
                    className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                    >
                    Decrement
                    </button>
                    <button 
                    onClick={reset} 
                    className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                    >
                    Reset
                    </button>
                </div>
            </div>
        </>
    );
}

export default CounterProgram