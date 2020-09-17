import React from "react";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="CartDropdown">
      <div className="items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
