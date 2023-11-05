import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext= createContext();

const BookProvider = ({children}) => {
    const [categories, setCategories]= useState([]);
    //load all categories
    useEffect(()=>{
        axios('http://localhost:5000/categories')
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