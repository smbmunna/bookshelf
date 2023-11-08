import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
const BorrowedBook = ({book}) => {
    const {user}= useAuth();
    
    const {_id, bookName, image,bookID, author, category, sdescription,rating}=book;    
    // console.log(user.email);
    // console.log(bookID);
    
    
 
    // return book
    const handleReturn=(email, bookID)=>{
        axios.delete(`https://bookshelf-server-henna.vercel.app/delete/cart/${email}/${bookID}`)
        .then(res=>console.log(res.data))
                
    }
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                {/* <figure className="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure> */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{sdescription}</p>
                    <div className="card-actions">
                        {/* <Link to={`/book/${_id}`} className="btn btn-primary">Return</Link> */}
                        <button onClick={()=>handleReturn(user.email, bookID)} className="btn btn-primary">Return</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBook;