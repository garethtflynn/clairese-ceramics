import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { currentProducts } = state;
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
    function showProducts() {
        if (!currentProducts) {
          return loading;
        } 
         state.products.filter(
        
          (product) => product.category._id === currentProducts
        );
        console.log(state.products) 
        return state.products;
      } 
      showProducts() 
  }, []);
  
if (loading) {
    return 'loading'
}
  return (
    <div className= "bg-[#EDEDE8]">
      <h1>Main Collection</h1>
      <div className="flex w-full h-screen space-x-4">
        {data.products.map((product) => (
          <ProductItem
            key={product._id}
            item = {product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;