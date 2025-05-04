import React from 'react'
import useFetch from '../hook/useFetch'

const Clients = () => {
    const [data] = useFetch("home/Client/")
    return (
        <div className="bg-white py-10 px-4">
            <div className="text-center mb-8">
                <p className="text-4xl font-semibold text-[#424242]">CLIENTS</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                <div key={index} className="w-32 h-32 bg-white flex items-center justify-center">
                    <img src={item.image} alt="{ item.title }" className="w-full h-full object-contain" />
                </div>
                ))
                ) : ( <p>No Client...</p> )}
            </div>
        </div>
    )
}

export default Clients
