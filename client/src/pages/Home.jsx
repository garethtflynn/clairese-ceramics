import twinmug1 from '../assets/twinmug1.jpg';
import pitcher1 from '../assets/pitcher1.jpg';
import curvymug1 from '../assets/curvymug1.jpg';
import set1 from '../assets/set1.jpg';
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                    <img
                    src={twinmug1}
                    class="block w-full"
                    alt="Twin Mug"
                    />
                    <Link to='/products'><button class="rounded absolute bottom-10 left-10 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>

                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                    src={pitcher1}
                    class="block w-full"
                    alt="Pitcher"
                    />
                    <Link to='/products'><button class="rounded absolute bottom-10 left-10 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>

                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                    src={curvymug1}
                    class="block w-full"
                    alt="Curvy Mug"
                    />
                    <Link to='/products'><button class="rounded absolute bottom-10 left-10 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>
                </div>

                <div class="carousel-item relative float-left w-full">
                    <img
                    src={set1}
                    class="block w-full"
                    alt="Full Set"
                    />
                    <Link to='/products'><button class="rounded absolute bottom-10 left-10 bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg m-2">Shop Collection</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;