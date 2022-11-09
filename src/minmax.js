import React from "react";
import propTypes from 'prop-types'


function MinMax ({min = 1, max, current, onChange}) {

    function validate(num) {
        let newCurrent = (Math.max(min, Math.min(num, max)))
        onChange(newCurrent)
    }
    
    const inc = () => {
        validate(current + 1)
    }
    const dec = () =>  {
        validate(current - 1)
    }

    function handleChange(event) {
        const num = parseInt(event.target.value)
        onChange(isNaN(num) ? min : num)
    }


    return (
        <div> 
            <button type="button" onClick={dec}>-</button>
            <input type='text' onChange={handleChange} value={current} />
            <button type="button" onClick={ inc}>+</button>
            <hr></hr>
        </div>
    )
}

MinMax.propTypes = {
    min: propTypes.number,
    max: propTypes.number.isRequired,
    current: propTypes.number.isRequired,
	onChange: propTypes.func.isRequired
}

export default MinMax