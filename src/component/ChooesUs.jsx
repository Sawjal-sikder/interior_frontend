import React from 'react'
import useFetch from '../hook/useFetch'

const ChooesUs = () => {
    const [data] = useFetch("home/Chooseus/")

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
            <div className="text-center pb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-wide">
                    WHY CHOOSE US
                </h2>
            </div>

            {data && data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="max-w-5xl mx-auto text-gray-700">
                        <div
                            className="text-base sm:text-lg mb-12 text-justify leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                    </div>
                ))
            ) : (
                <p>No data...</p>
            )}
        </section>
    )
}

export default ChooesUs
