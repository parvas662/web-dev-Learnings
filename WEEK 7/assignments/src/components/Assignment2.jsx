import { useState } from "react"
export function Assignment2() {
    const [color, setColor] = useState('white');

    return <div className="h-screen flex justify-around items-end pb-16"
        style={{ backgroundColor: color }}  >
        <button type="button"
            onClick={() => { setColor("green") }}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">green</button>
        <button type="button"
            onClick={() => { setColor("blue") }}
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">blue</button>
        <button type="button"
            onClick={() => { setColor("red") }}
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
        <button type="button"
            onClick={() => { setColor("yellow") }}
            className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">yellow</button>
        <button type="button" 
        class="text-black bg-white-700 hover:bg-white-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

            onClick={() => { setColor("white") }}> Default </button>
            
    </div>
}  
