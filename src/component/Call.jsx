import React from 'react'

const Call = () => {
    return (
        <div className="bg-[#696D6C] text-white py-16 px-8 sm:px-16 lg:px-32">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-lg font-semibold text-center sm:text-left">
                    CALL NOW TO TURN YOUR DREAM INTO REALITY
                </p>
                <a href="#"
                    className="text-lg font-bold px-6 py-3 bg-white text-black rounded-md shadow-md transition duration-300 hover:bg-gray-200 hover:shadow-lg"
                    role="button">
                    +8801386756656
                </a>
            </div>
        </div>
    )
}

export default Call
