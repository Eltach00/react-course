import React, { useContext } from 'react'
import StoreContext from '../context/store'

export function useStore(...list) {
  const stores = useContext(StoreContext)
  return list.map((name) => stores[name])
}
