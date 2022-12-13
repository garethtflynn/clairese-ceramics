import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY  } from "../../utils/actions";
import { idbPromise } from "../../utils/";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { _id, name, price, quantity, image } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
        dispatch ({
            type: UPDATE_CART_QUANTITY, 
            _id: _id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity)
        })
    }
  }

  return (
     <div>

     </div>);
}
