import React, { useState } from 'react';
import './Cart.css';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';

const Cart = () => {
  const { cartItems, updateCartItemQuantity, deleteCartItem } = useCart();
  const [toast, setToast] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );
  const gst = Math.round(totalPrice * 0.18);
  const finalPrice = totalPrice + gst;

  const showToast = (message) => {
    setToast({
      message,
      timestamp: Date.now()
    });
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdateQuantity = (itemId, newQuantity, itemName) => {
    updateCartItemQuantity(itemId, newQuantity);
    showToast(`Updated ${itemName} quantity to ${newQuantity}`);
  };

  const handleDeleteItem = (itemId, itemName) => {
    deleteCartItem(itemId);
    showToast(`Removed ${itemName} from cart`);
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        {toast && (
          <div className="toast-notification">
            <span>{toast.message}</span>
          </div>
        )}

        <h1 className="cart-title">Your Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <div className="quantity-control">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <p className="cart-item-quantity">
                        Quantity: {item.quantity}
                      </p>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}
                      >
                        +
                      </button>
                    </div>
                    <p className="cart-item-price">Price: ₹{item.price * item.quantity}</p>
                    <button
                      className="delete-item-btn"
                      onClick={() => handleDeleteItem(item.id, item.name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-item">
                <span>Total Price:</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-summary-item">
                <span>GST (18%):</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="cart-summary-item cart-summary-total">
                <span>Final Price:</span>
                <span>₹{finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        ) : (
          <p className="cart-empty">Your cart is empty. Add some ingredients to see them here!</p>
        )}
      </div>
    </>
  );
};

export default Cart;