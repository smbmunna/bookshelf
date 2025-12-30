import { Link } from "react-router-dom";


const HomeBook = ({book}) => {
    const {_id, name, image, sdescription}= book; 
    return (
        <div>
            <div className="card md:w-full h-[450px] bg-base-100 shadow-xl rounded-none bg-[#2c2c2c91] dark:bg-gray-300 flex mx-8 md:mx-auto">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{sdescription}</p>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`} className="btn text-white rounded-none bg-orange-500">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBook;