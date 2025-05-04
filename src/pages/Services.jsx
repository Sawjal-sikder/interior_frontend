import React from 'react'
import useFetch from '../hook/useFetch';

const Services = () => {
    const [data] = useFetch("home/service/");

    return (
        <div className="bg-gray-600 pt-4 pb-6 py-10 px-4">
            <div className="text-center font-medium py-10">
                <p className="text-4xl text-white">Services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:px-6">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="bg-white hover:bg-gray-200 rounded-lg overflow-hidden shadow-md p-6">
                            <div className="w-24 h-24 overflow-hidden rounded-full flex justify-center items-center mx-auto md:mt-8 md:mb-12">
                                <img
                                    src={item.image} // Adjust this key depending on your API response
                                    alt={item.title || "Service photo"}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-2xl font-semibold text-gray-800 my-4 text-center">
                                    {item.title || "Service Title"}
                                </p>
                                <p className="text-sm text-gray-600 text-justify">
                                    {item.description || "Service description goes here."}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-white text-center col-span-3">No services...</p>
                )}
            </div>
        </div>
    )
}

export default Services
