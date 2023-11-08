import axios from "axios";
import { useEffect, useState } from "react";
import HomeBook from "./HomeBook";

const ScifiCategory = () => {
    //loading scifi category books
    const [scifi, setScifi] = useState([]);
    const category = 'Science Fiction';
    useEffect(() => {
        axios(`https://bookshelf-server-henna.vercel.app/books/category/${category}`)
            .then(res => {
                setScifi(res.data);
            })
    }, [])
    return (
        <div className="my-16">
            <h1 className="font-bold text-3xl my-8 text-center">A Multiverse of Science Fiction & Fantasy Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {
                    scifi.map(book => <HomeBook key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default ScifiCategory;