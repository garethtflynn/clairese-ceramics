import React from "react";
import ProductItem from "../ProductItem";
import ProductList from "../ProductList";
import { Link } from "react-router-dom";
import curvymug1 from '../../assets/curvymug1.jpg'
import curvymug2 from '../../assets/curvymug2.jpg'
import curvymug3 from '../../assets/curvymug3.jpg'
import pitcher1 from '../../assets/pitcher1.jpg'
import pitcher2 from '../../assets/pitcher2.jpg'
import pitcher3 from '../../assets/pitcher3.jpg'
import set1 from '../../assets/set1.jpg'
import set2 from '../../assets/set2.jpg'
import set3 from '../../assets/set3.jpg'
import twinmug1 from '../../assets/twinmug1.jpg'
import twinmug2 from '../../assets/twinmug2.jpg'
import twinmug3 from '../../assets/twinmug3.jpg'

function AddModal(props) {

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
        <div className="w-screen h-screen flex justify-center items-center bg-[#EDEDE8] bg-opacity-50">
        <div className="container mx-auto max-w-lg w-full">
          <div className="card flex flex-col justify-center p-6 bg-white rounded shadow-2xl">
            <div className="prod-title mb-3">
                <Link to={`/Products/${_id}`}>
                    <p className="text-2xl text-black italic">{name}</p>
                    <p className="text-lg italic">${price}</p>
                    <p className="text-sm text-black font-light italic">
                        Description
                    </p>
                </Link>
    
            </div>
            <div className="prod-img">
                <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
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
                          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
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
            <div className="prod-info grid mt-4">
              <div className="flex flex-col md:flex-row justify-between items-center text-black">
                  <div className="flex justify-center w-1/3 py-2 bg-white border rounded">
                    <svg classNames="fill-current text-black w-3" viewBox="0 0 448 512">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
        
                    <input className="mx-8 text-center w-8" type="text" value="1" />
        
                    <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
    
                  <button className="px-24 py-2 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7]">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    );
  }
  
  export default AddModal;
  

