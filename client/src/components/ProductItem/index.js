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
    <div className=" ">
      <Link to={`/Products/${_id}`}>
        <img 
         alt={name} 
         src={getImage()} />
        <p>
          {name} - ${price}
        </p>
      </Link>
    </div>
  );
}

export default ProductItem;
