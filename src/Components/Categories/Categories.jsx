import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Providers/BookProvider";
import Category from "../Category/Category";

const Categories = () => {
    //load all categories
    const { categories } = useContext(BookContext);

    return (
        <div>
            <h1 className=" text-center text-3xl font-bold my-4">All Available Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    categories.map(category => <Category key={category._id} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;