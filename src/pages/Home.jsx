import { useLoaderData } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import Slider from "../components/Slider";
import Offers from "./Offers";
const Home = () => {
  const categories = useLoaderData();
  //   console.log(offers);
  //   console.log(categories);
  return (
    <div>
      {/* slider */}
      <Slider></Slider>

      <hr className="border border-dashed mb-10" />
      {/* cards of provide*/}
      <div className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl hover:underline font-bold text-center">We Provide You</h2>
          <p className="md:text-center text-sm text-gray-500">
            At The Reez, our commitment to excellence is woven into every aspect
            of your stay. Whether your seeking a tranquil retreat, a culinary
            journey, or a seamless event experience, we have you covered. From
            elegantly appointed rooms to personalized concierge services, we
            cater to your every need with warmth and attention to detail.
            Immerse yourself in our world-class amenities, curated experiences,
            and genuine hospitality that ensures your stay exceeds expectations.
            Experience the epitome of luxury and comfort with us at The Reez
            Family.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} category={category}></CategoryCard>
          ))}
        </div>
      </div>
      <hr className="border border-dashed mb-10" />
    </div>
  );
};

export default Home;
