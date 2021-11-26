import React from "react";
import './BtnWatch.css'

function BtnWatch(props) {
    return (
        <div className='btn'>
            <button onClick={props.start}>
                Start
            </button>
            <button onClick={props.stop}>
                Stop
            </button>
            <button onClick={props.reset}>Reset</button>
            <button onDoubleClick={props.wait}>Wait</button>
        </div>
    )
}

export default BtnWatch