import { useLoaderData } from "react-router-dom";
const Books = () => {
    const books= useLoaderData();
    console.log(books);
    return (
        <div>
            <h1>Books for Category: </h1>            
        </div>
    );
};

export default Books;