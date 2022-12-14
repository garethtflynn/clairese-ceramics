import React from "react";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY  } from "../../utils/actions";
// import { idbPromise } from "../../utils/";

function ProductItem(item) {
  //   const [state, dispatch] = useStoreContext();

  const { _id, name, price, quantity, image } = item;

  return (
    <div className="card ">
      <Link to={`/product/${_id}`}>
        <img 
         alt={name} 
         src={`/images/${image}`} />
        <p>
          {name} - {price}
        </p>
      </Link>
    </div>
  );
}

export default ProductItem;
