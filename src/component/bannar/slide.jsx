import React from 'react'

function slide({BannarImage, slide }) {
    return (
        <div className="relative w-full h-full">
            <img
                src={BannarImage}
                className="w-full h-64 md:h-96 object-cover"
                alt={`Slide ${slide.id}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <p className="text-lg md:text-xl font-light mb-2" style={{ fontFamily: 'IBM Plex Serif, serif' }}>
                    {slide.title}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight" style={{ fontFamily: 'IBM Plex Serif, serif' }}>
                    {slide.short_description}
                    <br />
                    <span className="text-xl md:text-2xl font-medium">{slide.title_line_2}</span>
                </h2>
            </div>
        </div>
    )
}

export default slide
