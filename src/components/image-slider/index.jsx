import React, { useState } from 'react';
import './style.css';

export default function ImageSlider({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [arrowsVisible, setArrowsVisible] = useState(false);


    if (!data || data.length === 0) {
        return <div className="image-slider-empty">No images available</div>;
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
    const handleMouseEnter = () => {
        setArrowsVisible(true);
    }
    const handleMouseLeave = () => {
        setArrowsVisible(false);
    }

    return (
        <div className="image-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="image-slider-container">
                {arrowsVisible && (
                    <>
                        <button className="image-slider-arrow left" onClick={handlePrevious}>&#10094;</button>
                        <button className="image-slider-arrow right" onClick={handleNext}>&#10095;</button>
                    </>
                )}
                <img src={data[currentIndex].image} alt={`image`} />
            </div>
        </div>
    );
}