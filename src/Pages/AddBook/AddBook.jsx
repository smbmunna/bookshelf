import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
//import Rating from 'react-rating';
import ReactStarsRating from 'react-awesome-stars-rating';
//import { Rating } from 'react-simple-star-rating'

import { BookContext } from "../../Providers/BookProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from '../../Hooks/useAuth';

const AddBook = () => {
    const { user } = useAuth();
    //loading book categories context
    const { categories } = useContext(BookContext);
    //handle change book category
    const [category, setCategory] = useState('')
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const { control, handleSubmit } = useForm();
    //for managing Rating
    // const [rating, setRating] = useState(0);
    // const handleRatingChange = value => {
    //     setRating(value);
    // }
    // const onChange = () => {
    //console.log(`React Stars Rating value is ${value}`);
    //};

    // const ReactStarsExample = ({ value }) => {
    //     return <ReactStarsRating onChange={onChange} value={value} />;
    // };



    const onSubmit = data => {
        // axios({
        //     method: 'post',
        //     url: 'https://bookshelf-server-henna.vercel.app/addBook',
        //     data: data
        // })
        axios.post(`https://bookshelf-server-henna.vercel.app/addBook/${user?.email}`, data, { withCredentials: true })
            .then(res => {
                if (res.data.insertedId !== "") {
                    Swal.fire({
                        title: "Good job!",
                        text: "Book Added Successfully!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 card w-full max-w-lg shadow-2xl  bg-[#2c2c2c91] rounded-none mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h1 className="text-3xl font-bold text-center">Add Book</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-600 text-xl">Book Name: </label>
                        <Controller
                            name="name"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <input
                                className="input input-bordered rounded-none"
                                placeholder="Book Name"
                                {...field} />}
                        />
                    </div>
                    {/* image */}
                    <div>
                        <label className="block text-gray-600  text-xl">Image URL: </label>
                        <Controller
                            name="image"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <input
                                className="input input-bordered rounded-none"
                                placeholder="Book Image"
                                {...field} />}
                        />
                    </div>
                    {/* Quantity */}
                    <div>
                        <label className="block text-gray-600  text-xl">Quantity: </label>
                        <Controller
                            name="quantity"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <input
                                className="input input-bordered rounded-none"
                                placeholder="Quantity"
                                {...field} />}
                        />
                    </div>
                    {/* Author */}
                    <div>
                        <label className="block text-gray-600  text-xl">Author: </label>
                        <Controller
                            name="author"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <input
                                className="input input-bordered rounded-none"
                                placeholder="Author"
                                {...field} />}
                        />
                    </div>
                    {/* Category */}
                    <div>
                        <label className="block text-gray-600  text-xl mb-2">Category: </label>
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => <div>
                                {/* <select className="form-control border-none" onChange={handleCategory} {...field}> */}
                                <select className="form-control input  rounded-none" {...field}>
                                    {/* <option value="" {...field}>Select Category</option> */}
                                    <option value="">Select Category</option>
                                    {
                                        categories.map(category => <option key={category._id} value={category.categoryName}>{category.categoryName}</option>)
                                    }
                                </select>
                            </div>
                            }

                        />
                    </div>
                    {/* Short Description */}
                    <div>
                        <label className="block text-gray-600  text-xl">Short Description: </label>
                        <Controller
                            name="sdescription"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <input
                                className="input input-bordered  rounded-none"
                                placeholder="Short Description"
                                {...field} />}
                        />
                    </div>
                    {/* Rating*/}
                    {/* <div>
                        <label className="block text-gray-600">Rating: </label>
                        <Controller
                            name="rating"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <div className="rating">                                
                                <input type="radio" value="1" checked={rating === "2"} name="rating" onClick={()=>handleRatingChange()} className="mask mask-star-2 bg-orange-400"{...field}  />
                                <input type="radio" value="2" checked={rating === "2"} name="rating" onClick={()=>handleRatingChange()} className="mask mask-star-2 bg-orange-400"{...field}  />
                                <input type="radio" value="3" checked={rating === "2"} name="rating" onClick={()=>handleRatingChange()} className="mask mask-star-2 bg-orange-400"{...field}  />
                                <input type="radio" value="4" checked={rating === "2"} name="rating" onClick={()=>handleRatingChange()} className="mask mask-star-2 bg-orange-400"{...field}  />
                                <input type="radio" value="5" checked={rating === "2"} name="rating" onClick={()=>handleRatingChange()} className="mask mask-star-2 bg-orange-400"{...field}  />
                            </div>
                            }
                        />

                    </div> */}
                    {/* <div>
                        <Rating value={rating} onChange={handleRatingChange} />
                    </div> */}
                    <div>
                        {/* <ReactStarsRating onChange={onChange} value={value} />; */}
                        <label className="block text-gray-600 text-xl mb-2">Rating: </label>
                        <Controller
                            name="rating"
                            defaultValue=""
                            control={control}
                            render={({ field }) =>
                                <ReactStarsRating className="flex" {...field} />
                            }
                        />
                    </div>
                    {/* <Controller
                            name="rating"
                            defaultValue=""
                            control={control}
                            render={({ field })=>
                            <Rating  {...field}/>
                            }
                        /> */}

                    {/* </div> */}

                </div>
                <div className="mx-auto grid justify-center">
                    <button className="btn text-white rounded-none bg-orange-500" type="submit">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;