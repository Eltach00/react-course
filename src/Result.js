import React from 'react'

export default function Result({ onPrev }) {
  return (
    <div>
      <h1>Result</h1>
      <hr />
      <button className="btn btn-danger" onClick={onPrev}>
        Back to Order
      </button>
    </div>
  )
}
