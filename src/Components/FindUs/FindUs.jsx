import { Map, Marker } from "pigeon-maps"

import { BsFillHouseFill, BsFillBookmarkCheckFill,BsEnvelopePaper } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl my-8 text-center  text-white dark:text-black">Come and Visit Us</h1>
            <div className="relative">
                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#0b0b0bbf] pb-10 md:w-1/3 h-full text-white items-center pl-10 md:absolute top-0">
                    <div className="flex items-center pt-10 mb-10">
                        <BsFillBookmarkCheckFill className="text-3xl mr-3" />
                        <h3 className="text-4xl font-bold">Book Shelf</h3>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <BsFillHouseFill className="text-3xl"/>
                        <p className="text-lg">Sector 04, Uttara, Dhaka 1230</p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <FaMobileAlt className="text-3xl" />
                        <p  className="text-lg">+789 558 69 85 +789 023 58 96</p>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <BsEnvelopePaper className="text-3xl" />
                        <p  className="text-lg">support@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUs;