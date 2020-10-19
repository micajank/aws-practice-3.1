import React from 'react'

const RoundButton = props => {
    return (
        <button className={props.className + ' round-button'} onClick={props.onClick}><h1>+</h1></button>
    )
}

export default RoundButton