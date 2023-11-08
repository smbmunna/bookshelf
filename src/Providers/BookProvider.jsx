import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext= createContext();

const BookProvider = ({children}) => {
    const [categories, setCategories]= useState([]);
    //load all categories
    useEffect(()=>{
        axios('https://bookshelf-server-henna.vercel.app/categories')
        .then(res=>setCategories(res.data))
    },[])

    const bookInfo={
        categories,
    }

    return (
        <BookContext.Provider value={bookInfo}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;