import { useEffect } from "react";
import Glide from "@glidejs/glide";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpeg";
import slider3 from "../assets/slider-3.webp";
import slider4 from "../assets/slider-4.jpg";
import slider5 from "../assets/slider-5.avif"
const Slider = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div>
      {/*<!-- Component: Slider with controls inside --> */}
      <div className="relative w-full glide-01 my-12 shadow-2xl">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={slider1}
                className="w-full max-w-full h-[50vh] md:h-[70vh] m-auto"
              />
            </li>
            <li>
              <img
                src={slider2}
                className="w-full max-w-full h-[50vh] md:h-[70vh] m-auto"
              />
            </li>
            <li>
              <img
                src={slider3}
                className="w-full max-w-full h-[50vh] md:h-[70vh] m-auto"
              />
            </li>
            <li>
              <img
                src={slider4}
                className="w-full max-w-full h-[50vh] md:h-[70vh] m-auto"
              />
            </li>
            <li>
              <img
                src={slider5}
                className="w-full max-w-full h-[50vh] md:h-[70vh] m-auto"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-900 bg-white/20 text-slate-900 hover:border-slate-950 hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-900 bg-white/20 text-slate-900 hover:border-slate-950 hover:text-white  focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with controls inside --> */}
    </div>
  );
};

export default Slider;
