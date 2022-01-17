import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector"; 
import { toggleCartHidden } from "../../redux/cart/cart.action";

import CarItem from "../cart-item/cart-item.component";
import CustomButton from "./../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss"

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      { cartItems.length 
          ? cartItems.map( cartItem => <CarItem key={cartItem.id} item={cartItem} />)
          : (<span className="empty-message">Your cart is empty</span>)
      }
    </div>
    <CustomButton onClick={ () => {
      dispatch(toggleCartHidden());
      history.push('/checkout')
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));