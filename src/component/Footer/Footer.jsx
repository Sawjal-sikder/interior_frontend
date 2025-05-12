import React from "react";
import ProjectImage from "../../assets/L_project/office-interior-design-01-2-500x500.jpg";
import Botumn from "./botumn";
import ContactUs from "./footer/ContactUs";
import Headline from "./footer/headline";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#3F3F3F] text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Contact Us --> */}
          <ContactUs />

          {/* <!-- Follow Our Page --> */}
          <div>
            <Headline text="Follow Our Page" className="" />

            <div className="w-full">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/bdinterior.net&tabs=timeline&width=300&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="200"
                style={{ border: "none", overflow: "hidden" }} // সঠিক স্টাইলিং
                scrolling="no"
                frameBorder="0" // React JSX এ frameborder এর সঠিক নাম 'frameBorder'
                allowFullScreen // React JSX এ allowfullscreen এর সঠিক নাম 'allowFullScreen'
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          {/* <!-- Email Us --> */}
          <div>
            <Headline text="Email Us" className="" />
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 text-white placeholder-gray-400 rounded-md"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 text-white placeholder-gray-400 rounded-md"
              />
              <input
                type="text"
                placeholder="Enter Your Mobile Number*"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 text-white placeholder-gray-400 rounded-md"
              />
              <textarea
                placeholder="Your message"
                rows="3"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 text-white placeholder-gray-400 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-700 hover:bg-green-600 w-full px-6 py-2 rounded-md font-semibold"
              >
                SEND
              </button>
            </form>
          </div>

          {/* <!-- Latest Project --> */}
          <div>
            <Headline text="Latest Project" className="" />

            <div className="grid grid-cols-3 gap-2">
              {/* {% with "123456789"|make_list as numbers %} */}
              {/* {% for i in numbers %} */}
              <div className="w-full h-20 bg-gray-700 rounded-md overflow-hidden">
                <img
                  src={ProjectImage}
                  alt="Latest Project Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* {% endfor %}
                            {% endwith %} */}
            </div>
          </div>
        </div>
      </footer>
      <Botumn />
    </>
  );
};

export default Footer;
