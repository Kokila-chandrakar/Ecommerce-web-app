import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.productId === product._id);
      
      if (existingItem) {
        toast.success(`Updated ${product.name} quantity`);
        return prevItems.map(item =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, {
          productId: product._id,
          name: product.name,
          price: product.price,
          quantity,
          imageUrl: product.imageUrl
        }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.productId === productId);
      if (item) {
        toast.error(`Removed ${item.name} from cart`);
      }
      return prevItems.filter(item => item.productId !== productId);
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};
