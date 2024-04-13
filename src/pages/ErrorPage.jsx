import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="h-[90vh] flex flex-col justify-center items-center space-y-2">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">Oops!</h1>
      <p className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg md:text-2xl lg:text-5xl font-bold text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-wide md:text-2xl md:mt-10">Back</Link>
    </div>
  );
};

export default ErrorPage;
