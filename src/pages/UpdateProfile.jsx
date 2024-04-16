import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserInfo, setBio } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  // console.log(setBio);
  const onSubmit = (data) => {
    const { name, image, biography } = data;
    console.log(name, image, biography);
    if (name == "" && image == "" && biography == "") {
      toast("Nothing Changed");
      return;
    }
    updateUserInfo(name, image).then(() => {
      toast("Profile updated");
      setTimeout(() => {
        navigate(location.state ? location.state : "/userProfile");
      }, 500);
    });
    setBio(biography);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update User- The Reez Family</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="md:w-1/2 border-2 py-5 px-3 md:px-10 rounded-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-semibold mb-10">Update Your Profile</h3>
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Username
          </label>
          <div className="flex">
            <input
              type="text"
              {...register("name")}
              className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="user name"
            />
          </div>

          <label
            htmlFor="website-admin"
            className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Photo URL
          </label>
          <div className="flex">
            <input
              type="text"
              {...register("image")}
              className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image"
            />
          </div>
          <label
            htmlFor="website-admin"
            className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bio
          </label>
          <div className="flex">
            <textarea
              type="text"
              {...register("biography")}
              className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Your Self"
            />
          </div>
          <div className="w-full mt-5 flex flex-row justify-center">
            <button className="btn bg-blue-500 text-white btn-wide">
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
