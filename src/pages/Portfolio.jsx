import React from 'react'
import Cart_for_other from '../component/Cart_for_other'
import useFetch from '../hook/useFetch'
const Portfolio = () => {

    const [data] = useFetch("home/portfolio/")

    return (
        <div className="bg-white py-10 px-4">
            <div className="text-center font-medium pb-10">
                <p className="text-4xl">PORTFOLIO</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-6">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="bg-white hover:bg-[#696D6C] cursor-pointer overflow-hidden p-4">
                            <Cart_for_other item={item} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No data available</div>
                )}
            </div>


            {/* See More Button */}
            {/* <div className="flex justify-center mt-10">
                <a href="/portfolio" className="bg-[#696D6C] text-white px-6 py-3 rounded-full hover:bg-black transition">
                    See More Portfolio
                </a>
            </div> */}
        </div>
    )
}

export default Portfolio
