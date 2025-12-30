import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Providers/BookProvider";
import Category from "../Category/Category";

const Categories = () => {
    //load all categories
    const { categories } = useContext(BookContext);

    return (
        <div className="grid">
            <h1 className=" text-center text-3xl text-white dark:text-black font-bold my-8">All Available Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto">
                {
                    categories.map(category => <Category key={category._id} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;