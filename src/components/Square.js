import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Square(props) {
    const [className, setClassName] = useState()
    const [value, setValue] = useState()

    return (
        <>
            <button type="button" className={`square ${props.value === 'X' ? 'gold' : 'green'}`} onClick={props.onClick}>{props.value}
            </button>
        </>
    )
}

export default Square

