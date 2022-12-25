import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useStore } from './hooks/useStore'

export default observer(function ({ onPrev, onNext }) {
  const [order] = useStore('order')

  /*modal window */
  const [showModal, setShowModal] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  const onExited = () => {
    if (confirmed) {
      onNext()
    }
  }

  const sendForm = () => {
    setConfirmed(true)
    closeModal()
  }

  return (
    <div>
      <h1>Input data</h1>
      <hr />
      <form>
        {order.fields.map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>
            <input
              type="text"
              className={`form-control ${
                field.value.length && !field.valid ? 'border border-danger' : ''
              }`}
              name={field.name}
              value={field.value}
              onChange={(e) => order.update(field.name, e.target.value.trim())}
            />
          </div>
        ))}
      </form>
      <hr />
      <button type="button" className="btn btn-warning" onClick={onPrev}>
        Back to cart
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={openModal}
        disabled={!order.isValid}
      >
        Send
      </button>
      <Modal show={showModal} onHide={closeModal} onExited={onExited}>
        <Modal.Header closeButton>
          <Modal.Title>Check data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={sendForm}>
            Ok, send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
})
