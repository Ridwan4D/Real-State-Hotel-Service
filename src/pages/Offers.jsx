import { useLoaderData } from "react-router-dom";
import Offer from "../components/Offer";


const Offers = () => {
    const offers = useLoaderData();
    // console.log(offers);
    return (
        <div>
            <h2 className="text-5xl animate__animated animate__fadeInDown font-bold text-center bg-slate-900 text-gray-400 py-8">Our Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    offers.map((offer,idx)=><Offer key={idx} offer={offer}></Offer>)
                }
            </div>
        </div>
    );
};

export default Offers;