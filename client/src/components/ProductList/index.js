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
    <div className="mx-auto mb-20 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <h1 className="text-2xl sm:text-3xl text-center italic mt-4 mb-1 sm:mb-4">Main Collection</h1>
      <div className="pt-3 sm:pt-5 grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 mx-auto gap-5">
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

