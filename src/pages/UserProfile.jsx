import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import userLogo from "../assets/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { user, upgradeProfile } = useContext(AuthContext);
  console.log(user.phoneNumber);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { name, image,email } = data;
    console.log(name, image,email);
    upgradeProfile(name, image,email).then(() => {
      toast("Profile updated");
    });
  };
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
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-xl md:text-3xl font-bold">
                {user.displayName}
              </h2>
              <a className="text-gray-400 mt-2">{user.email}</a>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>
                  <span className="font-semibold">The Reez</span>
                </p>
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
            <div className="flex justify-center">
              <button
                className="text-gray-400 border-2 border-gray-300 hover:bg-gray-500 px-3 border-t-0 py-2 mb-3"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Update Profile
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-2xl font-semibold mb-10">
                      Update Your Profile
                    </h3>
                    <label
                      htmlFor="website-admin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        @
                      </span>
                      <input
                        type="text"
                        {...register("name")}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="user name"
                      />
                    </div>
                    <label
                      htmlFor="website-admin"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        @
                      </span>
                      <input
                        type="text"
                        {...register("email")}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                      />
                    </div>
                    <label
                      htmlFor="website-admin"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Photo URL
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        @
                      </span>
                      <input
                        type="text"
                        {...register("image")}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Image"
                      />
                    </div>
                    <div className="w-full mt-5 flex flex-row justify-center">
                      <button className="btn bg-blue-500 text-white btn-wide">Save</button>
                    </div>
                    <small className="text-blue-500">After save reload Page......</small>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
