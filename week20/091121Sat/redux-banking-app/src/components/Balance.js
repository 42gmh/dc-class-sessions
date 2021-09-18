import React from 'react'
import { useSelector } from 'react-redux'

export const Balance = () => {
  const balance = useSelector((state) => state.balance)
  return <h1>{balance}</h1>
}