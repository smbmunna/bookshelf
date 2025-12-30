import AudioBook from "../../Components/AudioBook";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import FindUs from "../../Components/FindUs/FindUs";
import ScifiCategory from "../../Components/ScifiCategory";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-6xl mx-auto">
                <Categories />
                <ScifiCategory/>
                <AudioBook/>
                <FindUs/>
            </div>
        </div>
    );
};

export default Home;