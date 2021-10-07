import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
        showThumbs={false}
      >
        {/* <div className="h-full w-auto cursor-pointer bg-purple-500">
                    <div className="flex flex-row">
                        <div className="flex flex-col max-w-2xl text-purple-900 mx-24 my-40 text-left">
                            <h1 className="text-7xl">SuperApps Dikti</h1>
                            <p className="text-2xl mt-2.5">Satu platform terintegrasi untuk mendukung berbagai layanan di dikti</p>
                        </div>
                        <img className="max-w-sm" src="vector.png" />
                    </div>
                </div>

                <div className="h-full w-auto cursor-pointer bg-purple-500">
                    <div className="flex flex-row">
                        <div className="flex flex-col max-w-2xl text-purple-900 mx-24 my-40 text-left">
                            <h1 className="text-7xl">Test</h1>
                            <p className="text-2xl text-left mt-2.5">Satu platform terintegrasi untuk mendukung berbagai layanan di dikti</p>
                        </div>
                        <img className="max-w-sm" src="vector.png" />
                    </div>
                </div> */}
        <div>
          <img src="/carousel.png" alt="" />
        </div>
        <div>
          <img src="/carousel2.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
export default Slider;
