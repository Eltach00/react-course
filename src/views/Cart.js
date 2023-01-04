import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import MinMax from '../old-material/minmax/minmaxLazyState'
import { useStore } from '../hooks/useStore'
import { Link } from 'react-router-dom'

export default observer(function Cart({}) {
  const [productStore] = useStore('products')

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
          {productStore.products.map((pr, i) => (
            <tr key={pr.id}>
              <td>{i + 1}</td>
              <td>{pr.title}</td>
              <td>{pr.price}</td>
              <td>
                <MinMax
                  max={pr.rest}
                  current={pr.cnt}
                  onChange={(cnt) => {} /*cart.change(pr.id, cnt)*/}
                />
              </td>
              <td>{pr.price * pr.cnt}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  // onClick={() => cart.remove(pr.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary  btn-sm"
                  // onClick={() => cart.change(pr.id, pr.rest)}
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
            <td>{/* <strong>{cart.total}</strong> */}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <Link className="btn btn-primary" to="/order">
        Move to Order
      </Link>
    </div>
  )
})
