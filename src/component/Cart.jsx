import React from 'react'

const Cart = ({item}) => {
    return (
        <>
            <div>
                <img
                    src={item.image} // Assuming API returns 'image' field
                    alt={item.name || "item Image"}
                    className="w-full h-[360px] hover:h-[340px] object-cover transition-all duration-300"
                />
            </div>
            <div className="py-4 text-center">
                <p
                    className="text-2xl text-black hover:text-white"
                    style={{ fontFamily: "'IBM Plex Serif', serif" }}
                >
                    {item.name}
                </p>
            </div>
        </>
    )
}

export default Cart
