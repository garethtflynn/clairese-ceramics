import React from "react";
import { Link } from "react-router-dom";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";

import curvymug1 from "../../assets/curvymug1.jpg";
import pitcher1 from "../../assets/pitcher1.jpg";
import set1 from "../../assets/set1.jpg";
import twinmug1 from "../../assets/twinmug1.jpg";

function ProductItem(props) {
  const [state, dispatch] = useStoreContext();
  const [showModal, setShowModal] = React.useState(false);
  const { _id, name, price, image, description, quantity } = props.item;

  const { cart } = state;
  const addToCart = async () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props.item, purchaseQuantity: 1 },
      });
      await idbPromise("cart", "put", { ...props.item, purchaseQuantity: 1 });
    }
  };

  const getImage = () => {
    if (image === "curvymug1.jpg") {
      return curvymug1;
    }
    if (image === "pitcher1.jpg") {
      return pitcher1;
    }
    if (image === "set1.jpg") {
      return set1;
    }
    if (image === "twinmug1.jpg") {
      return twinmug1;
    }
  };

  return (
    <div className="grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto gap-5">
      <div className="text-center">
        <Link to={`/products/${_id}`}>
          <img alt={name} src={getImage()} />
          <p className="mt-3 mb-2">
            {name} - ${price}
          </p>
        </Link>
        <div>
          <div>
            {quantity} {pluralize("item", quantity)} in stock
          </div>
        </div>
        <button
          className="px-10 py-1 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7] "
          onClick={async () => {
            await addToCart();
          }}
        >
          Add To Cart
        </button>

        {/* FUTURE DEVELOPMENT */}
        {/* {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="prod-title mb-3">
                      <Link to={`/Products/${_id}`}>
                        <p className="text-2xl text-black italic">{name}</p>
                        <p className="text-lg italic">${price}</p>
                        <p className="text-sm text-black font-light italic">{description}</p>
                      </Link>
            
                    </div>
                      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active float-left w-full">
                          <img
                            src={getImage()}
                            className="block w-full"
                            alt="Wild Landscape"
                          />
                        </div>
                        <div className="carousel-item float-left w-full">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            className="block w-full"
                            alt="Camera"
                          />
                        </div>
                        <div className="carousel-item float-left w-full">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            className="block w-full"
                            alt="Exotic Fruits"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center p-6 rounded-b">
                    <button
                      className="px-24 py-2 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7]"
                      type="button"
                      onClick={addToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null} */}
      </div>
    </div>
  );
}

export default ProductItem;
