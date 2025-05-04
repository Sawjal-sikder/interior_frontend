import React from 'react'
import Icon from '../../assets/icon/Icon'

const botumn = () => {
    return (
        <div className="bg-[#161616] text-white py-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">

                {/* <!-- Left side: Copyright --> */}
                <div className="text-center md:text-left">
                    <p className="text-sm">2020 © Copyrights BDInterior</p>
                </div>

                {/* <!-- Center: Footer Links --> */}
                <div>
                    <ul className="flex flex-wrap justify-center gap-4 text-sm">
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Terms of use</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        <li><a href="#" className="hover:underline">Site Map</a></li>
                    </ul>
                </div>

                {/* <!-- Right side: Social Icons --> */}
                <div>
                    <ul className="flex justify-center gap-4">                       
                        <li><Icon icon="fab fa-facebook" className="text-xl hover:text-blue-500" /></li>
                        <li><Icon icon="fab fa-linkedin" className="text-xl hover:text-blue-500" /></li>
                        <li><Icon icon="fab fa-instagram" className="text-xl hover:text-red-500" /></li>
                        <li><Icon icon="fab fa-youtube" className="text-xl hover:text-red-500" /></li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default botumn
