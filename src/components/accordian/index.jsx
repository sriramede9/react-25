import './styles.css';
import React, { useState } from 'react';

export default function Accordion({ data }) {

    const [selected, setSelected] = useState(null);
    const [expandAll, setExpandAll] = useState(false);

    const handleSingleItem = (id) => () => {
        setSelected((prev) => (prev === id ? null : id));
        if (expandAll) {
            setExpandAll(false);
        }
    }

    const handleExpandAll = () => {
        setSelected(null);
        setExpandAll(prev => !prev);
        console.log("handle expand all")
    }

    return (
        <div className="wrapper">
            <div className="acccordian">
                <div className="expand-all">
                    <button className="accordion-btn" onClick={handleExpandAll}>
                        {expandAll ? 'Collapse All' : 'Expand All'}
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
                                    {(expandAll || selected === item.id) && (
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
