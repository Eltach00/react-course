import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

function MinMax({ min = 0, max, current, onChange }) {
  const [val, setVal] = useState(current)
  function validate(num) {
    let newCurrent = Math.max(min, Math.min(num, max))
    onChange(newCurrent)
    setVal(newCurrent)
  }

  const inc = () => validate(current + 1)
  const dec = () => validate(current - 1)

  function handleChange(e) {
    const num = parseInt(e.target.value)
    validate(isNaN(num) ? min : num)
  }

  function keyPressCheck(e) {
    if (e.keyCode === 13) {
      handleChange(e)
    }
  }

  //don't clear strings from input, used setVal in validate function
  useEffect(() => {
    setVal(current)
  }, [current])

  return (
    <div>
      <button className="btn btn-danger" type="button" onClick={dec}>
        -
      </button>
      <input
        className="w-25"
        type="text"
        onChange={(e) => setVal(e.target.value)}
        value={val}
        onBlur={handleChange}
        onKeyDown={keyPressCheck}
      />
      <button className="btn btn-primary" type="button" onClick={inc}>
        +
      </button>
    </div>
  )
}

MinMax.propTypes = {
  min: propTypes.number,
  max: propTypes.number.isRequired,
  current: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
}

export default MinMax
