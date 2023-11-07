import {Link} from 'react-router-dom';
const Book = ({book}) => {
    
    const {_id, name, image, sdescription}= book; 
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{sdescription}</p>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;