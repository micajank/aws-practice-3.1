import React from 'react'

const SquareButton = props => {
    return (
        <button className={props.className + ' square-gold-button'} onClick={props.onClick}>{props.text}</button>
    )
}

export default SquareButton