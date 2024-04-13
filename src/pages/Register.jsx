import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    // clear message
    setSuccess("");
    setRegisterError("");

    //validate password
    if (
      !/^(?=.*[A-Z]).+$/.test(password) &&
      !/^(?=.*[a-z]).+$/.test(password)
    ) {
      setRegisterError("Use minimum 1 upper & 1 lower case in password");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setRegisterError("Use minimum 1 upper case in password");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setRegisterError("Use minimum 1 lower case in password");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Account Registered");
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          toast("Email Already in Use");
          // eslint-disable-next-line no-cond-assign
        } else if (
          (error.message =
            "Firebase: Password should be at least 6 characters (auth/weak-password).")
        ) {
          setRegisterError("Password Should be 6 character or longer");
        } else {
          setRegisterError(error.message);
        }
      });
  };
  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)`,
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Keep it special
          </h1>
          <p className="text-3xl my-4">
            Capture your personal memory in unique way, anywhere.
          </p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <div className="mb-10">
            <button
              aria-label="Continue with google"
              role="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
            >
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                  fill="#EB4335"
                />
              </svg>
              <p className="text-base font-medium ml-4 text-gray-400">
                Continue with Google
              </p>
            </button>
            <button
              aria-label="Continue with github"
              role="button"
              className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                  fill="#333333"
                />
              </svg>

              <p className="text-base font-medium ml-4 text-gray-400">
                Continue with Github
              </p>
            </button>
          </div>

          <p className="text-gray-100">or use email your account</p>
          <form
            onSubmit={handleRegister}
            className="w-full px-4 lg:px-0 mx-auto"
          >
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="block w-full p-2 text-lg rounded-sm bg-black"
                required
              />
            </div>
            <div className="pb-2 pt-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-2 text-lg rounded-sm bg-black"
                required
              />
            </div>
            <div className="pb-2 pt-1 p-2 text-lg rounded-sm bg-black flex items-center">
              <input
                className="block w-full bg-black"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="pb-2 pt-1">
              <input
                className="block w-full p-2 text-lg rounded-sm bg-black"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            {success && <p className="text-sm text-green-600">{success}</p>}
            {registerError && (
              <p className="text-sm text-red-600">{registerError}</p>
            )}
            <div className="px-4 pb-2 pt-4">
              <button className="uppercase block w-full px-4 py-2 text-lg rounded-full bg-slate-900 hover:bg-slate-950 focus:outline-none">
                Register
              </button>
            </div>

            <div className="text-center">
              <Link
                to="/login"
                className="inline-block text-sm text-gray-700 align-baseline"
              >
                Already have an account?{" "}
                <span className="font-semibold text-gray-500 underline hover:text-gray-950">
                  Login!
                </span>
              </Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Register;
