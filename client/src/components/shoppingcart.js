import React from 'react';
import './shoppingcart.css'

import cclogo from '../img/cclogo.png';
import stlogo from '../img/stlogo.png';
import inoutlogo from '../img/inoutlogo.png';

class Cart extends React.Component {
  render() {
    return (
      <div class="product-page-wrapper">
        <div className="side-menu">
          <img src={stlogo} className="side-menu-logo"></img>
          <img src={inoutlogo} className="side-menu-logo"></img>
        </div>
        <div class="product-view">
          <div className="product-logo-space">
            <img src={cclogo} class="product-page-logo"></img>
          </div>
          <div className="cart-sections">
            <div>Shopping Cart</div>
            <div>Checkout Detail</div>
            <div>Hurry</div>
          </div>
          <div className="cart-container">
            <div className="table-container">
              <div className="table">
                <div className="trow-head">
                  <div>PRODUCT</div>
                  <div>PRICE</div>
                  <div>QUANTITY</div>
                  <div>TOTAL</div>
                </div>
                <div className="trow-product">
                  <div className="cart-product">
                    <div>Close</div>
                    <div className="cart-img">Img</div>
                    <div>Name</div>
                  </div>
                  <div>$100</div>
                  <div>5</div>
                  <div>$500</div>
                </div>
              </div>
            </div>
            <div className="cart-totals">
              <div className="cart-total-head">CART TOTALS</div>
              <div className="cart-total-info">
                <div className="price-row">
                  <div>Subtotal</div>
                  <div>$1,560</div>
                </div>
                <div className="price-row">
                  <div>Shipping</div>
                  <div>Flat Rate: $100</div>
                </div>
                <div className="price-row">
                  <div>Tax</div>
                  <div>$199</div>
                </div>
                <div className="price-row">
                  <div>Total</div>
                  <div>$1,859</div>
                </div>
              </div>
              <div class="cart-buttons">
                <div class="update-cart">UPDPATE CART</div>
                <div class="checkout-cart">PROCEED TO CHECKOUT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;