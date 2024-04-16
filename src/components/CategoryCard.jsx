import PropType from "prop-types";
import { Link } from "react-router-dom";
const CategoryCard = ({ category }) => {
  //   console.log(category);
  const {
    id,
    image,
    estate_title,
    description,
    segment_name,
    facilities,
    status,
  } = category;
  return (
    <div>
      <div
        className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 hover:scale-95 transition-all hover:shadow-xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div>
          <p className="bg-slate-900 px-3 py-1 text-gray-400">{status}</p>
        </div>
        <div className="flex flex-col justify-between px-6 space-y-3">
          <div className="space-y-2">
            <h2 className="text-xl md:text-3xl font-semibold tracking-wide">
              {estate_title}
            </h2>
            <p className="dark:text-gray-800">
              {description.length > 50 ? description.slice(0, 50) : description}
              ......
            </p>
          </div>
          <p className="text-lg md:text-xl font-semibold">Segment: {segment_name}</p>
          <div className="">
            Facilities:
            <ul className="flex font-semibold flex-wrap gap-x-5 gap-y-1">
              {facilities.map((facility, index) => (
                <li
                  className="border-b-2 border-slate-600 text-slate-500 px-3 py-1 rounded-md"
                  key={index}
                >
                  {facility}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3 text-center">
            <Link
              to={`/category/${id}`}
              className="btn w-full md:btn-wide font-semibold bg-slate-900 px-3 py-1 text-gray-400 hover:text-slate-700"
            >
              View Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
CategoryCard.propTypes = {
  category: PropType.object,
};
export default CategoryCard;
