import axios from "axios";
import { Controller, useForm } from "react-hook-form";

const AddCategory = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios({
            method: 'post',
            url: 'https://bookshelf-server-henna.vercel.app/addCategory', 
            data: data
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label>Category Name: </label>
                    <Controller
                        defaultValue=""
                        name="categoryName"
                        control={control}                        
                        render={({ field }) => <input className="input input-bordered" placeholder="Book Name"{...field} />}
                    />
                </div>

                <div className="mx-auto grid justify-center">
                    <button className="btn btn-primary" type="submit">Add Category</button>
                </div>
            </form>
        </div>
    );
};

export default AddCategory;