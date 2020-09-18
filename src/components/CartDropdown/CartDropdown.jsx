import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/selectors";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="CartDropdown">
      <div className="items">
        {!cartItems.length ? (
          <span className="empty-message">Your cart is empty</span>
        ) : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({ cartItems: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
