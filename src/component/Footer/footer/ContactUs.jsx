import React from 'react'
import Headline from './headline'

const ContactUs = () => {
    return (
        <div>       
            <Headline text="Contact Us" className='' />
            <p className="flex items-start gap-2 mb-8">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                <span>
                    Level-02, House-147, Lane-04,
                    Mohakhali DOHS, DHAKA-1212
                </span>
            </p>
            <p className="flex items-center gap-2 mb-2">
                <i className="fas fa-phone-alt text-blue-400"></i>
                Phone: +88 01711 208563
            </p>
            <p className="flex items-center gap-2 mb-2">
                <i className="fas fa-envelope text-blue-400"></i>
                Email: <a href="mailto:info@bdinterior.net" className="text-green-500">info@bdinterior.net</a>
            </p>
            <p className="flex items-center gap-2">
                <i className="fas fa-globe text-blue-400"></i>
                Website: <a href="https://bdinterior.net" className="text-green-500">https://bdinterior.net</a>
            </p>
        </div>
    )
}

export default ContactUs
