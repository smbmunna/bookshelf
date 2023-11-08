import { useLoaderData } from 'react-router-dom';

const ReadBook = () => {
    const book = useLoaderData();
    const { _id, name, image, sdescription } = book;
    return (
        <div className='card w-full max-w-lg shadow-2xl  bg-[#2c2c2c91] rounded-none text-white mx-auto'>
            <h1 className='text-3xl my-8 font-bold text-center'>{name} </h1>
            <img src={image} alt="" />
            <div className='mx-4 my-4'>
                <h2 className='text-xl font-bold'>Book Preview:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium molestiae deserunt sunt quod! Maxime ducimus, voluptatum, reiciendis tenetur reprehenderit, neque nihil mollitia nulla repellat non enim iure architecto deleniti in. Iusto nemo facere cumque blanditiis, voluptas amet iure obcaecati quo earum laborum officiis molestiae nam at ducimus fuga perspiciatis, eos accusamus error pariatur consequuntur cupiditate, impedit dolorem. Aliquid magnam rem sit doloribus architecto et laudantium ut, officia porro eaque possimus dignissimos quis iure iste adipisci quidem ipsum fuga dolor consectetur repudiandae temporibus reiciendis reprehenderit. Voluptatibus expedita facilis saepe pariatur mollitia. Iusto temporibus, reiciendis voluptas ducimus eaque tempore enim consectetur sapiente vero eum, impedit modi id deserunt adipisci quos? Animi temporibus maiores reiciendis dolores cupiditate blanditiis sit distinctio quisquam, odio quas doloremque eos ratione? Placeat libero omnis sapiente aspernatur nostrum error corporis in, voluptatibus reiciendis illum necessitatibus fuga itaque eaque sequi consectetur, blanditiis nam architecto est doloremque. Doloremque, dignissimos odio.</p>
            </div>
        </div>
    );
};

export default ReadBook;