import React from "react";
import { Link } from "react-router-dom";
import curvymug from '../../assets/curvymug1.jpg'
import pitcher from '../../assets/pitcher1.jpg'
import set from '../../assets/set1.jpg'
import twinmug from '../../assets/twinmug1.jpg'




function ProductItem(props) {

  const [showModal, setShowModal] = React.useState(false);
  const { _id, name, price, image } = props.item;

    const getImage = () => {
        if (image === 'curvymug1.jpg'){
            return curvymug;
        } if (image === 'pitcher1.jpg'){ 
            return pitcher
        } if (image === 'set1.jpg') {
            return set
        } if (image === 'twinmug1.jpg') {
            return twinmug
        }
    }

  return (
    <div className="grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto gap-5">
      <div className="text-center">
          <img 
            alt={name} 
            src={getImage()} 
          />
          <p className="mt-3 mb-2">
            {name} - ${price}
          </p>
          <button class="px-10 py-1 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7] " onClick={() => setShowModal(true)}>Add To Cart</button>
          {showModal ? (
      <>
      {/* Add to Cart Modal */}
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Modal Title
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  I always felt like I could do anything. That’s the main
                  thing people are controlled by! Thoughts- their perception
                  of themselves! They're slowed down by their perception of
                  themselves. If you're taught you can’t do anything, you
                  won’t do anything. I was taught I could do everything.
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
      </div>
    </div>

      );
    }

export default ProductItem;