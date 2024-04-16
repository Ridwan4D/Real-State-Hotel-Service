import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Helmet } from "react-helmet";

const Details = () => {
  const categories = useLoaderData();
  const { id } = useParams();
  const category = categories.find((category) => category.id == id);
  // console.log(category);
  const {
    image,
    estate_title,
    area,
    description,
    facilities,
    location,
    price,
    segment_name,
    status,
  } = category;
  // console.log(category);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details/{id}- The Reez Family</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="dark:bg-gray-100 dark:text-gray-900"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="container grid grid-cols-12 mx-auto">
          <div
            className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center p-8 py-12 text-center text-gray-300">
              <span>12 June</span>
              <h1 className="py-4 text-5xl font-bold">{segment_name}</h1>
              <p className="pb-6">
                Feel Fresh Here, enjoy with our full family!!!
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-3 divide-y lg:col-span-6 lg:p-10 bg-slate-900 text-gray-300">
            <div className="pt-6 pb-4 space-y-2">
              <span className="text-2xl font-medium hover:border-b-4 border-slate-950">
                {segment_name}
              </span>
              <h1 className="text-3xl font-bold bg-slate-950 px-5 py-2">
                {estate_title}
              </h1>
              <p className="text-xl font-medium">{location}</p>
              <p className="text-xl">
                <span className="font-medium">Area:</span> {area}
              </p>
              <div className="">
                Facilities:
                <ul className="flex font-semibold flex-wrap gap-x-5 gap-y-1">
                  {facilities.map((facility, index) => (
                    <li
                      className="bg-slate-950 px-3 py-1 text-gray-400 rounded-md"
                      key={index}
                    >
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xl">
                <span className="font-medium">Status:</span> {status}
              </p>
              <p className="text-xl">
                <span className="font-medium">Price:</span> ${price}{" "}
                <small>ph</small>
              </p>
              <div>
                <p className="text-xl font-medium">Description:</p>
                {description}
              </div>
              <div className="text-end py-5">
                <Link to="/" className="btn btn-wide">
                  <IoMdArrowBack /> Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
