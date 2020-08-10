import React from "react";

function CartItem({ product}) {
    return(
        <div className="cart-item">
              <span className="item-text">
                {product.line1}
              </span>
              <span className="item-total">₹</span>
              <span class="menu-action">
                <button className="remove-button" >
                    -
                </button>
              </span>
            </div>
    );
 }

 export default CartItem; 
