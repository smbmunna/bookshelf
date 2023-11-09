//import { Container } from "./Container";
import { usePDF } from "react-to-pdf";
//import { Button } from "./Button";
import { useLoaderData } from 'react-router-dom';

const ReadBook = () => {
    const book = useLoaderData();
    const { _id, name, image, sdescription } = book;

    //for pdf download
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });


    return (
        //<Container>

        <div>
            <div className="grid">
                <button className=" my-8 btn text-white rounded-none bg-orange-500 mx-auto" onClick={() => toPDF()}>Download PDF</button>
            </div>

            <div ref={targetRef} className='card w-full max-w-lg shadow-2xl  bg-[#2c2c2c91] rounded-none text-white mx-auto'>
                <h1 className='text-3xl my-8 font-bold text-center'>{name} </h1>
                <img src={image} alt="" />
                <div className='mx-4 my-4'>
                    <h2 className='text-xl font-bold'>Book Preview:</h2>
                    <p>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] It can also be a handwritten or printed work of fiction or nonfiction, usually on sheets of paper fastened or bound together within covers. The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.

                        As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read. In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage reflecting that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained. Each part of Aristotle's Physics is called a book. In an unrestricted sense, a book is the compositional whole of which such sections, whether called books or chapters or parts, are parts.

                        The intellectual content in a physical book need not be a composition, nor even be called a book. Books can consist only of drawings, engravings or photographs, crossword puzzles or cut-out dolls. In a physical book, the pages can be left blank or can feature an abstract set of lines to support entries, such as in an account book, appointment book, autograph book, notebook, diary or sketchbook. Some physical books are made with pages thick and sturdy enough to support other physical objects, like a scrapbook or photograph album. Books may be distributed in electronic form as ebooks and other formats.</p>
                </div>
            </div>
        </div>
        //</Container>
    );
};

export default ReadBook;