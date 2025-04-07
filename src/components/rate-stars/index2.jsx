import './styles.css';
import { useState } from 'react';
export default function RateStars2({ rating = 0, onRate }) {

    const [selectedRating, setSelectedRating] = useState(rating);
    const [hoveredRating, setHoveredRating] = useState(0);
    const handleMouseEnter = (index) => setHoveredRating(index);
    const handleMouseLeave = () => setHoveredRating(0);
    const handleClick = (index) => {
        setSelectedRating(index);
        if (onRate) onRate(index);
    };
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span
                key={i}
                className={`star ${(i <= hoveredRating || i<=selectedRating)? 'filled' : ''}`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(i)}
                role="button"
                aria-label={`Rate ${i} stars`}
            >
                ★
            </span>
        );

    }


    //return simple hello
    return (
        <div className="rate-stars">
            {stars}
        </div>
    );
}