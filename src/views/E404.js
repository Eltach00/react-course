import React from 'react'
import { Link } from 'react-router-dom'

export default function E404() {
  return (
    <div className="container">
      <h1>E404</h1>

      <Link className="btn btn-primary" to="/">
        Back to Main Page
      </Link>
    </div>
  )
}
