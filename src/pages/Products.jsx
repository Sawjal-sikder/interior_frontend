import React from 'react';
import useFetch from '../hook/useFetch';
import Cart from '../component/Cart';

const Products = () => {
    const [data] = useFetch("home/product/");

    return (
        <div className="py-10 px-4">
            <div className="text-center font-medium pb-10">
                <p className="text-4xl">Product</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-6">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="bg-white hover:bg-[#696D6C] cursor-pointer overflow-hidden p-4">
                            <Cart item={item} />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No data available</div>
                )}
            </div>


            {/* See More Button */}
            <div className="flex justify-center mt-10">
                <a
                    href="/products"
                    className="bg-[#696D6C] text-white px-6 py-3 rounded-full hover:bg-black transition"
                >
                    See More Products
                </a>
            </div>
        </div>
    );
};

export default Products;
