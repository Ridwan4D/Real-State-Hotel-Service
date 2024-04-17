import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userLogo from "../assets/user.png";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user} = useContext(AuthContext);
  console.log(user);
  const bio =  JSON.parse(localStorage.getItem('bio'));
  
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User- The Reez Family</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h3 className="text-xl md:text-4xl font-bold  animate__animated animate__flip shadow-lg">
        User Profile
      </h3>
      <div className=" flex flex-wrap items-center justify-center bg-gray-100 py-4 md:py-10">
        <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div className="flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full mt-20"
              src={user.photoURL || userLogo}
              alt=""
            />
          </div>
          <div className=" ">
            <div className="text-center px-4">
              <h2 className="text-gray-800 text-xl md:text-3xl font-bold">
                {user.displayName}
              </h2>
              <a className="text-gray-400 mt-2">{user.email}</a>
              <div className="text-start mt-3 space-y-5">
                <Link className="px-5 py-2 rounded-lg bg-gray-100 border-b-4 font-medium" to='/updateProfile'>Add or Update Bio</Link> {" "}
              <p className="text-sm text-gray-600">{bio}</p>
              </div>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <Link to='/'>
                  <span className="font-semibold">The Reez</span>
                </Link>
              </div>
              <div className="border"></div>
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  {" "}
                  <span className="font-semibold">Property</span>
                </p>
              </div>
            </div>
            <hr />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
