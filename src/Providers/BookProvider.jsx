import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            axios('https://bookshelfserver-brown.vercel.app/categories')
                .then(res => {
                    setCategories(res.data);
                    console.log('category loaded', res.data.length);
                })
        }, "2000");
    }, [])

    //for theme toggle
    //theme switch
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

    const bookInfo = {
        categories,
        handleThemeSwitch,
        setTheme,
        theme
    }

    return (
        <BookContext.Provider value={bookInfo}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;