import { useLoaderData } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const categories = useLoaderData();
//   console.log(categories);
  return (
    <div>
      {/* slider */}

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category, idx) => (
          <CategoryCard key={idx} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
