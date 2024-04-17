import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userLogo from "../assets/user.png";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const bio = JSON.parse(localStorage.getItem("bio"));
  const phone = JSON.parse(localStorage.getItem("number"));
  const address = JSON.parse(localStorage.getItem("address"));

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
      <div className="">
        <div className="md:w-3/12 text-center mx-auto border-2 border-gray-400 rounded-lg my-10">
          <div className="flex flex-col bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={user.photoURL || userLogo}
                alt="John Doe"
              />
            </div>
            <div className="py-7 md:px-10">
              <h3 className=" text-xl text-gray-900 font-medium leading-8">
                {user.displayName}
              </h3>
              <div className=" text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div>
              <table className="text-xs mt-3 text-start">
                <tbody>
                  {user.email && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email:{" "}
                      </td>
                      <td className="px-2 py-2">{user.email}</td>
                    </tr>
                  )}
                  {phone && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Phone:{" "}
                      </td>
                      <td className="px-2 py-2">{phone}</td>
                    </tr>
                  )}
                  {address && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Address:{" "}
                      </td>
                      <td className="px-2 py-2">{address}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {bio ? (
                <p className="text-start px-2 py-2 text-xs font-medium text-gray-700">
                  {bio}
                </p>
              ) : (
                <p>Add Bio</p>
              )}

              <div className=" my-3">
                <Link
                  to="/updateProfile"
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
