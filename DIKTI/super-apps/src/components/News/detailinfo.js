import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/*import Progress from "@material-tailwind/react/Progress";*/

function DetailInfo(){
    return (
        <section className="body-font items-center mx-16 my-auto">
            <div className="container mx-auto my-10">
                <div className="flex items-center mb-14">
                    <h1 className="text-4xl font-medium title-font text-black">
                        Pengumuman
                    </h1>
                    {/* SEARCH BAR */}
                    <div className="container flex justify-end items-center">
                        <div class="container bg-white border-1 rounded-full shadow px-4 max-w-xl sm:px-6 lg:px-8">
                            <div className="flex items-center">
                                <SearchIcon className="relative absolute h-5 text-gray-500" />
                                <input
                                    type="text"
                                    class="h-14 w-full pr-8 pl-5 rounded z-0 bg-transparent  focus:outline-none"
                                    placeholder="Cari Informasi Layanan  "
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className="grid grid-row-4 grid-flow-col gap-4">

                        {/* SLIDER */}
                        <div className="relative row-span-4 col-span-3 object-cover object-center h-full w-full">
                            <Carousel
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                                interval={3000}
                                showThumbs={false}
                            >
                                <div>
                                    <img src="/carousel3.png" alt="" />
                                </div>
                                <div>
                                    <img src="/carousel3.png" alt="" />
                                </div>
                            </Carousel>

                            {/* <Progress color="gray" value="50" percentage={false} /> */}

                            <div className="card shadow-lg rounded-xl absolute z-10 top-72 left-16 bg-white w-full max-w-xl px-10 py-8">
                                <div className="card-body text-2xl title-font font-medium">
                                    <h3>Tulisan ini adalah judul berita untuk aplikasi superpp yang cukup...</h3>
                                </div>
                            </div>
                            <div className="mt-40">
                                <svg width="751" height="7" viewBox="0 0 751 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="3.5" x2="751" y2="3.5" stroke="#F2EEF3" stroke-width="7" />
                                </svg>
                            </div>
                        </div>

                        {/*PENGUMUMAN TERBARU*/}
                        <div className="text-4xl font-medium title-font text-black ml-4">
                            Pengumuman Terbaru
                        </div>
                        <div className="flex ml-4">
                            <div className="mt-4 mx-auto w-72 text-gray-500 mr-10">
                            <p className="mb-1 mx-auto text-gray-500">20 September 2021</p>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                Berikut adalah judul pengu muman yang cukup panjan g hingga mengambil 3 ba...
                                </h2>
                                <p className="mt-1 mx-auto text-gray-500">Pembelajaran dan mahasiswa</p>
                            </div>
                            <a className="block relative h-36 w-52 rounded overflow-hidden">
                                <img className="object-cover object-center w-auto h-full mx-auto block" src="/news.png" />
                            </a>
                        </div>

                        <div className="flex ml-4">
                            <div className="mt-4 mx-auto w-72 text-gray-500 mr-10">
                            <p className="mb-1 mx-auto text-gray-500">20 September 2021</p>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                Berikut adalah judul pengu muman yang cukup panjan g hingga mengambil 3 ba...
                                </h2>
                                <p className="mt-1 mx-auto text-gray-500">Pembelajaran dan mahasiswa</p>
                            </div>
                            <a className="block relative h-36 w-52 rounded overflow-hidden">
                                <img className="object-cover object-center w-auto h-full mx-auto block" src="/news.png" />
                            </a>
                        </div>

                        <div className="flex ml-4">
                            <div className="mt-4 mx-auto w-72 text-gray-500 mr-10">
                                <p className="mb-1 mx-auto text-gray-500">20 September 2021</p>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                Berikut adalah judul pengu muman yang cukup panjan g hingga mengambil 3 ba...
                                </h2>
                                <p className="mt-1 mx-auto text-gray-500">Pembelajaran dan mahasiswa</p>
                            </div>
                            <a className="block relative h-36 w-52 rounded overflow-hidden">
                                <img className="object-cover object-center w-auto h-full mx-auto block" src="/news.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DetailInfo
