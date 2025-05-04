import React from 'react'

const headline = ({text, className="" }) => {
    return (
        <>
            <h2 className={`text-2xl font-bold mb-4 ${className}`}>{text} <span className="text-green-600">▸</span></h2>
        </>
    )
}

export default headline
