import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import useFetch from "../../hook/useFetch";

const Gallary_list = () => {
  const [data] = useFetch("home/Gallary/");

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-white pt-4 pb-6 py-10 px-4">
          <div className="text-center font-medium py-10">
            <p className="text-4xl text-lime-950">Gallary</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:px-6">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-md"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title || "Gallery photo"}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-400 bg-opacity-60 text-white text-center py-3 transform translate-y-full group-hover:translate-y-0 transition duration-300">
                    <p className="text-lg font-semibold">
                      {item.title || "Gallery Title"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center col-span-3">No Gallery...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallary_list;
