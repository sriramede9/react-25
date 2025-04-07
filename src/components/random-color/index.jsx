import React, { useState } from 'react';
import './style.css';
export default function RandomColor() {
    const [color, setColor] = useState('#000000');


    const generateHexColor = () => {
        const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(hexColor);
        console.log(hexColor);
    }

    const generateRGBColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
        console.log(rgbColor);
    }
    const generateHSLColor = () => {
        const h = Math.floor(Math.random() * 361);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);
        const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
        setColor(hslColor);
        console.log(hslColor);
    }
    const generateCMYKColor = () => {
        const c = Math.floor(Math.random() * 101);
        const m = Math.floor(Math.random() * 101);
        const y = Math.floor(Math.random() * 101);
        const k = Math.floor(Math.random() * 101);
        const cmykColor = `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
        setColor(cmykColor);
        console.log(cmykColor);
    }
    const generateRGBAColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = (Math.random()).toFixed(2);
        const rgbaColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        setColor(rgbaColor);
        console.log(rgbaColor);
    }

    return (
        <div className="random-color" style={{ backgroundColor: color }}>
            {/* <div className="color-box" style={{ backgroundColor: color }}></div> */}
            <button onClick={generateHexColor}>Generate Hex Color</button>
            <button onClick={generateRGBColor}>Generate RGB Color</button>
            <button onClick={generateHSLColor}>Generate HSL Color</button>
            <button onClick={generateCMYKColor}>Generate CMYK Color</button>
            <button onClick={generateRGBAColor}>Generate RGBA Color</button>
            <div className="color-code">
                <p>Color Code: {color}</p>
                </div>
        </div>
    );
}
