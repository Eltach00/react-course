import React, { useRef } from 'react'
import useClickOutside from '../hooks/useClickOutside'

export default function ModalWindow({ opened, onClick }) {
  const classOpen = ['vmodal']
  if (opened) {
    classOpen.push('open')
  }
  const vmodal = useRef()
  useClickOutside(vmodal, () => {
    if (opened) {
      onClick()
    }
  })
  return (
    <div className={classOpen.join(' ')}>
      <div className="modal-overlay" data-close="true">
        <div ref={vmodal} className="modal-window">
          <div className="modal-header">
            <span className="modal-title">Window</span>
            <span className="modal-close" data-close="true"></span>
          </div>
          <div className="modal-body">Hello</div>
          <div className="modal-footer">
            <button
              onClick={onClick}
              data-close="true"
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
