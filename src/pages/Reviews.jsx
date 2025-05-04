import React from 'react'

const Reviews = () => {
    return (
        <div className="bg-[#EDEDED] py-10 px-4">
            <div className="text-center font-medium pb-10">
                <p className="text-4xl">CLIENT REVIEWS</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto md:px-8">

                {/* {% for review in reviews %} */}
                <div className="bg-[#F9F9F9] shadow-md border border-black p-6 rounded-lg">
                    <h3 className="text-xl font-semibold py-2 text-center">Professional & Satisfying</h3>
                    <p className="text-yellow-500 text-lg pb-4 text-center">★★★★★
                        {/* {% for i in "12345"|slice:":review.rating" %}★ {% endfor %} */}
                    </p>
                    <p className="font-semibold pb-4 text-center">DR. RICHMOND GOMES</p>
                    <p className="text-gray-700 text-justify">It was a Wonderful experience with BD INTERIOR. They are very professional about their service. I am very much satisfied to them. I think, they will be Top ranked Interior Design Company in very short time if they maintain this type of Professionalism</p>
                </div>

            </div>
        </div>
    )
}

export default Reviews
