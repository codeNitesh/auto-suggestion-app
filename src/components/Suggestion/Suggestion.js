import React, { useState } from "react";
import "./Suggestion.css";

const Suggestion = ({ text, highlight }) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))

    return(
        <span>
            {parts.map((part, index)=>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={index} className="highlight-text">
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    )
}

export default Suggestion;