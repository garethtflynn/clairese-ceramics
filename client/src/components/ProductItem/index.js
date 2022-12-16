import React from "react";
import { Link } from "react-router-dom";
import curvymug from '../../assets/curvymug1.jpg'
import pitcher from '../../assets/pitcher1.jpg'
import set from '../../assets/set1.jpg'
import twinmug from '../../assets/twinmug1.jpg'




function ProductItem(props) {

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
        <Link to={`/Products/${_id}`}>
          <img 
            alt={name} 
            src={getImage()} 
          />
          <p className="mt-3 mb-2">
            {name} - ${price}
          </p>
          <button class="px-10 py-1 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7]">Add To Cart</button>
        </Link>
      </div>
    </div>
    
  );
}

export default ProductItem;