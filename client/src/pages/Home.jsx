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
                    <h1 className="absolute top-10 text-right right-2 sm:right-20 text-white italic px-20 py-2 m-2 fontFamily text-2xl sm:text-5xl">handmade in georgia <br />by ashlynn claire<br /></h1>
                    <img
                    src={twinmug1}
                    class="block w-full"
                    alt="Twin Mug"
                    />
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>

                </div>
                <div className="carousel-item relative float-left w-full">
                    <h1 className="absolute top-10 text-right right-2 sm:right-20 text-white italic px-20 py-2 m-2 fontFamily text-2xl sm:text-5xl">handmade in georgia <br />by ashlynn claire<br /></h1>
                    <img
                    src={pitcher1}
                    class="block w-full"
                    alt="Pitcher"
                    />
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>

                </div>
                <div class="carousel-item relative float-left w-full">
                    <h1 className="absolute top-10 text-right right-2 sm:right-20 text-white italic px-20 py-2 m-2 fontFamily text-xl sm:text-5xl">handmade in georgia <br />by ashlynn claire<br /></h1>
                    <img
                    src={curvymug1}
                    className="block w-full"
                    alt="Curvy Mug"
                    />
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>
                </div>

                <div class="carousel-item relative float-left w-full">
                    <h1 className="absolute top-10 text-right right-2 sm:right-20 text-white italic px-20 py-2 m-2 fontFamily text-2xl sm:text-5xl">handmade in georgia <br />by ashlynn claire<br /></h1>
                    <img
                    src={set1}
                    className="block w-full"
                    alt="Full Set"
                    />
                    <Link to='/products'><button className="rounded-md absolute bottom-10 sm:bottom-20 left-20 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;