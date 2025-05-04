import React from 'react'
import ProjectImage from '../assets/L_project/office-interior-design-01-2-500x500.jpg'

const LatestPoject = () => {
    return (
        <div className="bg-white py-10 px-4">
            <div className="text-center font-medium pb-10">
                <p className="text-4xl">LATEST PROJECT – COMMERCIAL</p>
            </div>

            {/* <!-- Project Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-6">
                {/* {% for project in projects|slice:":6" %} */}
                <div className="bg-white hover:bg-[#696D6C] cursor-pointer overflow-hidden p-4">
                    <div>
                        <img src={ProjectImage} alt="{{ project.title }}"
                            className="w-full h-[360px] hover:h-[340px] object-cover transition-all duration-300" />
                    </div>
                    <div className="py-4 text-center">
                        <p className="text-2xl text-black hover:text-white transition duration-300"
                            style={{ fontFamily: "'IBM Plex Serif', serif" }} >
                            New Project
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- See More Button --> */}
            <div className="flex justify-center mt-10">
                <a href="#" className="bg-[#696D6C] text-white px-6 py-3 rounded-full hover:bg-black transition">
                    See More Projects
                </a>
            </div>
        </div>
    )
}

export default LatestPoject
