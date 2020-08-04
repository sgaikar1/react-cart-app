import React from "react";

function CartItem({ productName, price, reduceFromCart, sku, qty}) {
    return(
        <div className="cart-item">
              <span className="item-text">
                {productName} x {qty}
              </span>
              <span className="item-total">₹{price}</span>
              <span class="menu-action">
                <button className="remove-button" onClick={() => reduceFromCart(sku)}>
                    -
                </button>
              </span>
            </div>
    );
 }

 export default CartItem; 
