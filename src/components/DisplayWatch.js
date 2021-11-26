import React from "react";
import './DisplayWatch.css'

function DisplayWatch(props) {
    return (
        <div className='appDisplay'>
            <div className='display'>
                <span className='disItems'> {new Date(props.sec).toISOString().slice(11, 19)}</span>
            </div>
        </div>

    )
}

export default DisplayWatch