import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllBook from "../../Components/AllBook/AllBook";
import useAuth from '../../Hooks/useAuth';


const AllBooks = () => {
    const { user, } = useAuth();
    const [allBooks, setAllBooks] = useState([]);
    const [categories, setCategories] = useState([]);

    //load all categories
    useEffect(() => {
        axios.get('https://bookshelfserver-brown.vercel.app/categories')
            .then(res => setCategories(res.data))
    }, [])
    console.log(categories);
    //const [selectdCategory, setSelectedCategory] = useState('All');

    const handleCategoryFilter = (category) => {
        // setSelectedCategory(category);
        //console.log('selected: ', selectdCategory)
        if (category === "All") {
            axios.get(urlAllBooks, { withCredentials: true })
                .then(res => setAllBooks(res.data))
        } else {
            //const filteredBooks =  allBooks.filter(book => book.category === category);
            axios.get(`https://bookshelfserver-brown.vercel.app/books/category/${category}`)
            .then(res=> setAllBooks(res.data))
        }
    }

    //load all books
    const urlAllBooks = 'https://bookshelfserver-brown.vercel.app/allBooks';
    useEffect(() => {
        if (user && user.email) {
            axios.get(urlAllBooks, { withCredentials: true })
                .then(res => setAllBooks(res.data))
        }
    }, [user])
    //filter books
    const handleFilter = () => {
        axios.get('https://bookshelfserver-brown.vercel.app/availableBooks')
            .then(res => setAllBooks(res.data))

    }
    return (
        <div className=" md:max-w-screen-xl mx-8 md:mx-auto my-8 ">
            <h1 className="text-3xl font-bold text-center">List of all available Books {allBooks.length}</h1>
            <div className="grid">
                <button onClick={handleFilter} className="mx-auto btn text-white rounded-none bg-orange-500 my-4">Show Only Available Books</button>
            </div>
            <div>
                <label htmlFor="categoryFilter">Filter by Book Category</label>
                <select id="categoryFilter"
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                >
                    <option>All</option>
                    {
                        categories.map(category => <option key={category._id}>{category.categoryName}</option>)
                    }
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    allBooks.map(book => <AllBook key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;