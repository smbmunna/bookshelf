import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-6xl mx-auto">
                <Categories />
            </div>
        </div>
    );
};

export default Home;