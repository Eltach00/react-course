import React, { useEffect } from 'react'

export default function useClickOutside(ref, fn) {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) {
        fn()
      }
    }
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [ref, fn])
}
