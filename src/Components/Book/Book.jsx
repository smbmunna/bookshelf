import { Link } from 'react-router-dom';
// import ReactStarsRating from 'react-awesome-stars-rating';
import StarRatings from 'react-star-ratings';
const Book = ({ book }) => {

    const { _id, name, image, author, category, sdescription , rating} = book;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl rounded-none">
                <figure className="relative ">
                    <img src={image} alt="Shoes" className='md:h-80 w-full' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>By: <span className='font-bold'> {author}</span> </p>
                    <p> <span className='text-lg font-bold'> {category}</span> </p>

                    <div>
                        <p>Rating:<span className='text-lg font-bold'> {rating}</span></p>
                        <StarRatings
                            rating={rating}
                            starDimension="20px"
                            starSpacing="8px"
                        />
                    </div>

                    {/* <p>{sdescription}</p> */}
                    <div className="card-actions">
                        <Link to={`/book/${_id}`} className="btn text-white rounded-none bg-orange-500">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;