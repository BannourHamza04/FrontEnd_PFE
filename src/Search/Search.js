import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <div className="input-box">
            <i className="uil uil-search"></i>
            <input type="text" placeholder="Search here..." />
            <button className="button">Search</button>
        </div>
    )
}
