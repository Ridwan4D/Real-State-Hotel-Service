import PropType from "prop-types";
const CategoryCard = ({ category }) => {
  console.log(category);
  const { image, estate_title, description, segment_name, facilities, status } =
    category;
  return (
    <div>
      <div
        className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
      >
        <img
          src={image}
          alt=""
          data-aos="zoom-in"
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div>
          <p className="bg-slate-900 px-3 py-1 text-gray-400">{status}</p>
        </div>
        <div className="flex flex-col justify-between px-6 space-y-3">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {estate_title}
            </h2>
            <p className="dark:text-gray-800">
              {description.length > 50 ? description.slice(0, 50) : description}
              ......
            </p>
          </div>
          <p className="text-xl font-semibold">Segment: {segment_name}</p>
          <p className="">
            Facilities:
            <ul className="flex font-semibold flex-wrap gap-x-5 gap-y-1">
              {facilities.map((facility, index) => (
                <li
                  className="bg-slate-900 px-3 py-1 text-gray-400 rounded-md"
                  key={index}
                >
                  {facility}
                </li>
              ))}
            </ul>
          </p>
          <div className="py-3 text-center">
            <button className="btn btn-wide font-semibold bg-slate-900 px-3 py-1 text-gray-400 hover:text-slate-700">
              View Property
            </button>
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
