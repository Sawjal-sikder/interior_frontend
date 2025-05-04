import React, { useState } from 'react'
import Logo_img from '../assets/include/logo.png'
import Logo from '../component/navbar/logo'
import usePost from '../hook/usePost'

const ContactUs = () => {
    const { postData, response, error, isLoading } = usePost("home/contactUs/"); 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postData(formData);

        if (!error) {
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        }
    };

    return (
        <div className="bg-[#EDEDED] py-10 px-4">
            <div className="text-center mb-8">
                <p className="text-xl font-semibold text-[#424242]">
                    GET 100% FREE CONSULTANCY
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center px-8">

                {/* <!-- Form Section --> */}
                <div className="lg:col-span-2">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="space-y-1">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-1">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-1">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#424242] text-white font-semibold w-full px-6 py-3 rounded-md hover:bg-black transition duration-300"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send"}
                        </button>

                        {/* Show Response or Error */}
                        {response && <p className="text-green-600 text-center">Message sent successfully!</p>}
                        {error && <p className="text-red-600 text-center">Error: {error}</p>}
                    </form>

                </div>

                {/* <!-- Image Section --> */}
                <div className="col-span-1 flex justify-center">
                    <Logo src_img={Logo_img} alt_img="Logo" className="max-h-64 object-contain" />
                    {/* {% if contact_section.image %} */}
                    {/* <img src="{{ contact_section.image.url }}" alt="Consultancy Image" className="max-h-64 object-contain"> */}
                    {/* {% endif %} */}
                </div>

            </div>
        </div>
    )
}

export default ContactUs
