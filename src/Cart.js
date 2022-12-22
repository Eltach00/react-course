import React from 'react'
import MinMax from './old-material/minmax/minmaxLazyState'

export default function Cart({ onNext, products, onChange, onDelete, total }) {
  return (
    <div className="container">
      <h1>Cart</h1>
      <hr />
      <table className="table">
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Cnt</th>
            <th>Total</th>
          </tr>
          {products.map((pr, i) => (
            <tr key={pr.id}>
              <td>{i + 1}</td>
              <td>{pr.title}</td>
              <td>{pr.price}</td>
              <td>
                <MinMax
                  max={pr.rest}
                  current={pr.cnt}
                  onChange={(cnt) => onChange(pr.id, cnt)}
                />
              </td>
              <td>{pr.price * pr.cnt}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(pr.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary  btn-sm"
                  onClick={() => onChange(pr.id, pr.rest)}
                >
                  All
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total amount</strong>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <strong>{total}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <button className="btn btn-primary" onClick={onNext}>
        Move to Order
      </button>
    </div>
  )
}
