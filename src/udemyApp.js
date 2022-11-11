import React from 'react'
import { useRef, useState } from 'react'

export default function UdemyApp() {
  const [styles, setStyles] = useState('')
  const handleClick = () => {
    setStyles('btn')
  }
  return (
    <div>
      <button className={styles} onClick={handleClick}>
        Click me!
      </button>
    </div>
  )
}
