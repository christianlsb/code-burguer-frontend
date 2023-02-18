import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProdcuts, setCartProdcuts] = useState([]);

  const putProductsInCart = async (product) => {
    const cartIndex = cartProdcuts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProdcuts;

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1;
      setCartProdcuts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProdcuts, product];
      setCartProdcuts(newCartProducts);
    }

    await localStorage.setItem(
      "codeburguer:cartInfo",
      JSON.stringify(newCartProducts)
    );
  };

  // useEffect(() => {
  //   const loadCartDate = async () => {
  //     const clientCartData = await localStorage.getItem("codeburguer:cartInfo");

  //     if (clientCartData) {
  //       setCartProdcuts(JSON.parse(clientCartData));
  //     }
  //   };
  //   loadCartDate();
  // }, []);

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
