import { useLoaderData } from "react-router-dom";
import Offer from "../components/Offer";
import { Helmet } from "react-helmet";

const Offers = () => {
  const offers = useLoaderData();
  // console.log(offers);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offers- The Reez Family</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl md:text-5xl animate__animated animate__fadeInDown font-bold text-center bg-slate-900 text-gray-400 py-2 md:py-8">
        Our Offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mt-5 md:mt-10">
        {offers.map((offer, idx) => (
          <Offer key={idx} offer={offer}></Offer>
        ))}
      </div>
    </div>
  );
};

export default Offers;
