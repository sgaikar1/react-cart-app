import React from "react";
import CartItem from "../components/CartItem";

function Cart({total, menu, cart, reduceFromCart}) {
    return(
        <div id="cart">
        <h2 className="text-center">Cart</h2>
        <div id="cart-area">
          {/* {Object.keys(cart).map((key, index) => (
            <CartItem
            productName={menu[key].productName}
            price={menu[key].price}
            reduceFromCart={reduceFromCart}
            sku={key}
            qty = {cart[key]}
        />
          ))} */}
          <div id="cart-total">
            <div className="cart-item">
              <span className="item-text">total</span>
              <p className="item-total">
                ₹<span id="total-amount">{total}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
 }

 export default Cart; 
