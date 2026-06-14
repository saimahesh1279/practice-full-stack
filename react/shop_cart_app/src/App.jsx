
import React, { useReducer } from 'react'

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 }
]

function reducer(state, action) {
  switch(action.type) {
    case "ADD":
      const item = state.find(i => i.id === action.product.id)
      if (item) {
        return state.map(i => i.id === action.product.id
          ? {...i, qty: i.qty + 1}
          : i
        )
      }
      return [...state, {...action.product, qty: 1}]
    case "REMOVE":
      return state.filter(i => i.id !== action.id)
    default:
      return state
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(reducer, [])

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div style={{padding:20}}>
      <h2>Mini E-Commerce (useReducer + Cart)</h2>

      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <button onClick={() => dispatch({type:"ADD", product:p})}>
            Add
          </button>
        </div>
      ))}

      <h3>Cart</h3>
      {cart.map(i => (
        <div key={i.id}>
          {i.name} x {i.qty}
          <button onClick={() => dispatch({type:"REMOVE", id:i.id})}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  )
}
