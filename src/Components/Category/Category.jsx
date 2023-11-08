import {Link} from 'react-router-dom'

const Category = ({category}) => {
    const {categoryName}= category;
    return (
        <div>
            <Link to={`/books/category/${categoryName}`} className="card w-72 bg-base-100 shadow-xl rounded-none">
                {/* <figure><img src="" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">{categoryName}</h2>                    
                </div>
            </Link>
        </div>
    );
};

export default Category;