import {Link} from 'react-router-dom'

const Category = ({category}) => {
    const {categoryName, img}= category;
    return (
        <div>
            <Link to={`/books/category/${categoryName}`} className="card w-72 bg-base-100 shadow-xl rounded-none">
                {/* <figure><img src="" alt="Shoes" /></figure> */}
                <div className="card-body " style={{ backgroundImage: `url(${img})` }}>
                    {/* <h2 className="card-title text-white">{categoryName}</h2>    */}
                    <button className='btn bg-opacity-40 bg-black   text-white rounded-none mt-4 text-xl'>{categoryName}</button>                
                </div>
            </Link>
        </div>
    );
};

export default Category;