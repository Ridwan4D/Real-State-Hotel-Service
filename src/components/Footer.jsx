import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCheckmarkDone } from "react-icons/io5";
AOS.init();

const Footer = () => {
  return (
    <div>
      <footer className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-3 md:p-10 bg-slate-900 text-white">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Hotel</a>
          <a className="link link-hover">Motel</a>
          <a className="link link-hover">Resort</a>
          <a className="link link-hover">Guest House</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col">
          <img src={logo} alt="" width="200" className="rounded-xl" />
          <p className="text-blue-400 flex items-center gap-1"><IoCheckmarkDone />The Signature of Reez</p>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-slate-900 text-white border-base-300">
        <aside className="items-center font-medium text-lg grid-flow-col">
          <p className="cursor-pointer text-gray-600 hover:text-white">
            PRIVACY
          </p>
          <p>&</p>
          <p className="cursor-pointer text-gray-600 hover:text-white">
            PRIVACY
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>© Copyright Reserved by The Reez Family.</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
