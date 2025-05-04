import React from 'react'
import useFetch from '../hook/useFetch'

const Reviews = () => {

    const [data] = useFetch("home/Review/")

    return (
        <div className="bg-[#EDEDED] py-10 px-4">
            <div className="text-center font-medium pb-10">
                <p className="text-4xl">CLIENT REVIEWS</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto md:px-8">

                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="bg-[#F9F9F9] shadow-md border border-black p-6 rounded-lg">
                            <h3 className="text-xl font-semibold py-2 text-center">{item.title}</h3>
                            <p className="text-yellow-500 text-lg pb-4 text-center">
                                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                            </p>

                            <p className="font-semibold pb-4 text-center">{item.user}</p>
                            <p className="text-gray-700 text-justify">{item.description}</p>
                        </div>
                    ))
                ) : (<p>No Review ...</p>)}
            </div>
        </div>
    )
}

export default Reviews
