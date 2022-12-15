import React from "react";

function AddModal() {
  
    return (
        <div class="w-screen h-screen flex justify-center items-center bg-[#EDEDE8] bg-opacity-50">
        <div class="container mx-auto max-w-lg w-full">
          <div class="card flex flex-col justify-center p-6 bg-white rounded shadow-2xl">
            <div class="prod-title mb-3">
              <p class="text-2xl text-black italic">Name</p>
              <p class="text-lg italic">Price </p>
              <p class="text-sm text-black font-light italic">
                Description
              </p>
    
            </div>
            <div class="prod-img">
                <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
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
                    <div class="carousel-inner relative w-full overflow-hidden">
                      <div class="carousel-item active float-left w-full">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                          class="block w-full"
                          alt="Wild Landscape"
                        />
                      </div>
                      <div class="carousel-item float-left w-full">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                          class="block w-full"
                          alt="Camera"
                        />
                      </div>
                      <div class="carousel-item float-left w-full">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                          class="block w-full"
                          alt="Exotic Fruits"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            <div class="prod-info grid mt-4">
              <div class="flex flex-col md:flex-row justify-between items-center text-black">
                  <div class="flex justify-center w-1/3 py-2 bg-white border rounded">
                    <svg class="fill-current text-black w-3" viewBox="0 0 448 512">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
        
                    <input class="mx-8 text-center w-8" type="text" value="1" />
        
                    <svg class="fill-current text-black w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                    </svg>
                  </div>
    
                  <button class="px-24 py-2 transition ease-in duration-200 rounded hover:shadow-lg text-white italic font-light bg-[#B0BEC7]">Add To Cart</button>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    
          
    );
  }
  
  export default AddModal;
  

