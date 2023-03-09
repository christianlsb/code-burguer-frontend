import PropTypes from "prop-types"
import React, { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProdcuts, setCartProdcuts] = useState([])

  const updatedLocalStorage = async product => {
    await localStorage.setItem("codeburguer:cartInfo", JSON.stringify(product))
  }

  const putProductsInCart = async product => {
    const cartIndex = cartProdcuts.findIndex(prd => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProdcuts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProdcuts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProdcuts, product]
      setCartProdcuts(newCartProducts)
    }

    updatedLocalStorage(newCartProducts)
  }
  const incrementProduct = async productId => {
    const newCart = cartProdcuts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProdcuts(newCart)

    updatedLocalStorage(newCart)
  }
  const deleteProduct = async productId => {
    const newCart = cartProdcuts.filter(product => product.id !== productId)

    setCartProdcuts(newCart)

    updatedLocalStorage(newCart)
  }

  const decrementProduct = async productId => {
    const cartIndex = cartProdcuts.findIndex(
      product => product.id === productId
    )

    if (cartProdcuts[cartIndex].quantity > 1) {
      const newCart = cartProdcuts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProdcuts(newCart)

      updatedLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }
  useEffect(() => {
    const loadCartDate = async () => {
      const clientCartData = await localStorage.getItem("codeburguer:cartInfo")

      if (clientCartData) {
        setCartProdcuts(JSON.parse(clientCartData))
      }
    }
    loadCartDate()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductsInCart,
        cartProdcuts,
        incrementProduct,
        decrementProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used with CartContext")
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
