import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProdcuts, setCartProdcuts] = useState([]);

  const putProductsInCart = async (product) => {
    const cartIndex = cartProdcuts.findIndex((prd) => prd.id === product.id);

    let newCartProdcuts = [];
    if (cartIndex >= 0) {
      const newCartProdcuts = cartProdcuts;

      newCartProdcuts[cartIndex].quantity =
        newCartProdcuts[cartIndex].quantity + 1;

      setCartProdcuts(newCartProdcuts);
    } else {
      product.quantity = 1;
      newCartProdcuts = [...cartProdcuts, product];
      setCartProdcuts(newCartProdcuts);
    } 
    await localStorage.setItem(
      "codeburguer:cartInfo",
      JSON.stringify(newCartProdcuts)
    );
  };

  useEffect(() => {
    const loadCartDate = async () => {
      const clientCartData = await localStorage.getItem("codeburguer:cartInfo");

      if (clientCartData) {
        setCartProdcuts(JSON.parse(clientCartData));
      }
    };
    loadCartDate();
  }, []);

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProdcuts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used with CartContext");
  }

  return context;
};
