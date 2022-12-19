import React, { useRef } from 'react'
import propTypes from 'prop-types'

function MinMaxRef({ min = 0, max, current, onChange }) {
  let inp = useRef()
  function validate(num) {
    let newCurrent = Math.max(min, Math.min(num, max))
    inp.current.value = newCurrent
    onChange(newCurrent)
  }

  const inc = () => validate(current + 1)
  const dec = () => validate(current - 1)

  function handleChange() {
    const num = parseInt(inp.current.value)
    validate(isNaN(num) ? min : num)
  }

  function keyPressCheck(e) {
    if (e.keyCode === 13) {
      handleChange(e)
    }
  }

  return (
    <div>
      <button type="button" onClick={dec}>
        -
      </button>
      <input
        ref={inp}
        type="text"
        onChange={handleChange}
        defaultValue={current}
        onBlur={handleChange}
        onKeyDown={keyPressCheck}
      />
      <button type="button" onClick={inc}>
        +
      </button>
      <hr></hr>
    </div>
  )
}

MinMaxRef.propTypes = {
  min: propTypes.number,
  max: propTypes.number.isRequired,
  current: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
}

export default MinMaxRef
