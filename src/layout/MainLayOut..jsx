import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayOut = () => {
  return (
    <div className="md:max-w-7xl mx-auto">
      {/* navbar */}
      <div className="h-16 mb-10">
        <Nav></Nav>
      </div>
      {/* outlets */}
      <div className="px-3 mt-20 min-h-[calc(100vh - 356px)]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayOut;
