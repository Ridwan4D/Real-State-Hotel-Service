import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import userLogo from "../assets/user.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const { user, upgradeProfile } = useContext(AuthContext);
//   console.log(user);

  //   update profile
  const handleUpdateProfile = (e) => {
    e.preventDefault;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(name,photoUrl);

    upgradeProfile(name, photoUrl).then(() => {
      toast("Profile Updated");
    });
  };
  return (
    <div>
      <div className="h-screen w-full bg-gray-50 flex justify-center items-center">
        <div className="h-56 w-72 absolute flex justify-center items-center">
          <img
            className="object-cover h-20 w-20 rounded-full"
            src={user?.photoURL || userLogo}
            alt=""
          />
        </div>

        <div
          className="
          h-56
          mx-4
          w-5/6
          bg-blue-400
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
        "
        >
          <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
            <h1 className="text-white">Profile</h1>
          </div>

          <div
            className="
            bg-white
            h-full
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
          "
          >
            <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2"></div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center">
              <h1 className="text-gray-700 font-bold">{user.displayName}</h1>
              <h1 className="text-gray-500 text-sm">{user.email}</h1>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="text-blue-500 border-2 border-gray-300 px-3 rounded-md mb-3"
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
                <form onSubmit={handleUpdateProfile}>
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
                      id="name"
                      name="name"
                      className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="user name"
                    />
                  </div>
                  <label
                    htmlFor="website-admin"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Photo URL
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      @
                    </span>
                    <input
                      type="text"
                      id="photoUrl"
                      name="photoUrl"
                      className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image"
                    />
                  </div>
                  <div className="w-full mt-5 flex flex-row justify-center">
                    <button className="btn bg-blue-500 btn-wide">Save</button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserProfile;
