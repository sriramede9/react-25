import './styles.css';
import React, { useState } from 'react';

export default function Accordion({ data }) {

    const [selected, setSelected] = useState(null);
    const [expandAll, setExpandAll] = useState(false);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    const handleSingleItem = (id) => () => {
        setSelected((prev) => (prev === id ? null : id));
        if (expandAll) {
            setExpandAll(false);
        }
        if (enableMultiSelect) {
            setSelected(null);
            setMultiSelected((prev) => {
                if (prev.includes(id)) {
                    return prev.filter((item) => item !== id);
                } else {
                    return [...prev, id];
                }
            });
        }
        console.log("handle multi select" , multiSelected);
    }

    const handleExpandAll = () => {
        setSelected(null);
        setExpandAll(prev => !prev);
        console.log("handle expand all")
    }

    const handleEnableMultiSelect = () => {
        setExpandAll(false);
        setEnableMultiSelect(prev => !prev);
        setSelected(null);
        console.log("handle enable multi select")
    }

    return (
        <div className="wrapper">
            <div className="acccordian">
                <div className="expand-all">
                    <button className="accordion-btn" onClick={handleExpandAll}>
                        {expandAll ? 'Collapse All' : 'Expand All'}
                    </button>
                    <button className="accordion-btn" onClick={handleEnableMultiSelect}>
                        {enableMultiSelect ? 'Disable Multi Select' : 'Enable Multi Select'}
                    </button>
                </div>
                {data && data.length === 0 ? (
                    <div className="accordion-empty">
                        No data available
                    </div>
                ) : (
                    data.map((item) => (
                        <div onClick={handleSingleItem(item.id)} key={item.id} className="accordion-item">
                            <div className="accordion-title">{item.title}</div>
                            <span className="accordion-button">+</span>
                            <div className="accordion-content">
                                <div key={item.id} className={`accordion-item-content ${selected === item.id ? 'active' : ''}`}>
                                    {(expandAll || selected === item.id || multiSelected.includes(item.id)) && (
                                        <div className="accordion-content-text">{item.content}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                    ))
                )}
            </div>


        </div>
    );
}
