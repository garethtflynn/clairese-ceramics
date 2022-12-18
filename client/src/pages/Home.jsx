import twinmug1 from '../assets/twinmug1.jpg';
import pitcher1 from '../assets/pitcher1.jpg';
import curvymug1 from '../assets/curvymug1.jpg';
import set1 from '../assets/set1.jpg';
import {Link} from 'react-router-dom'

{/* <div className="mx-auto mb-20 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"> */}

function Home() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                    src={twinmug1}
                    class="block w-full"
                    alt="Twin Mug"
                    />
                    <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">handmade in atlanta, georgia</h5>
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>

                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                    src={pitcher1}
                    class="block w-full"
                    alt="Pitcher"
                    />
                    <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">handmade in atlanta, georgia</h5>
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>

                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                    src={curvymug1}
                    className="block w-full"
                    alt="Curvy Mug"
                    />
                    <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">handmade in atlanta, georgia</h5>
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>
                </div>

                <div class="carousel-item relative float-left w-full">
                    <img
                    src={set1}
                    className="block w-full"
                    alt="Full Set"
                    />
                    <h5 className="absolute bottom-20 sm:bottom-40 text-black italic px-20 fontFamily text-4xl sm:text-5xl mb-6 sm:mb-0">handmade in atlanta, georgia</h5>
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;