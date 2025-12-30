import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/qLnJH49R/bg-black.jpg')] dark:bg-[url('https://i.ibb.co/BZ4z4xG/symbol-scatter-haikei-2.png')]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;