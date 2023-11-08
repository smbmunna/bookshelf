import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import ScifiCategory from "../../Components/ScifiCategory";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-6xl mx-auto">
                <Categories />
                <ScifiCategory/>
            </div>
        </div>
    );
};

export default Home;