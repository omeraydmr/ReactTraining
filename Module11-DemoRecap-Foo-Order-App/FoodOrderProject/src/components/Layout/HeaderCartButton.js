import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from "./HeaderCartButton.modules.css"

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
  )
}

export default HeaderCartButton