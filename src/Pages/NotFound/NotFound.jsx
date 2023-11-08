import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex items-center justify-center text-center text-black]">
            <div className="">
                <h1 className="text-5xl font-bold mb-10">Error 404!</h1>
                <h1 className="text-3xl font-bold">Opps! Page Not Found</h1>
                <Link className="btn btn-primary bg-[#2c2c2c91] rounded-none text-white mt-10" to='/'>Home</Link>
            </div>
        </div>
    );
};

export default NotFound;