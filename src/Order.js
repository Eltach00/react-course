import React from 'react'

export default function Order({ onPrev, onNext }) {
  return (
    <div className="container ">
      <h1>Order</h1>
      <hr />
      <form className="lh-lg">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mt-2">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="Password"
          />
        </div>
        <div className="form-check mt-2">
          <input type="checkbox" className="form-check-input" id="check" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      <button className="btn btn-danger m-1" onClick={onPrev}>
        Back to Cart
      </button>
      <button className="btn btn-primary" onClick={onNext}>
        Next to Result
      </button>
    </div>
  )
}
