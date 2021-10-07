import Link from "next/link";

function News() {
  return (
    <section className="body-font items-center justify-center mx-16 my-auto">
      <div className="container mx-auto my-16">
        <h1 className="text-4xl font-medium title-font mb-16 text-purple-700 text-center items-center justify-center">
          Berita Dikti
        </h1>

        <div className="flex flex-col bg-white rounded-xl">
          <div className="flex flex-wrap mb-16">
            <div className="my-1 py-4 px-1 w-80 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  className="object-cover object-center w-auto h-full mx-auto block"
                  src="/news.png"
                />
              </a>
              <div className="mt-4 mx-auto max-w-2xl w-80">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Judul berita yang panjang banget judul berita yang panjang
                  banget Judul berita yang panjang banget
                </h2>
                <p className="mt-2 mx-auto text-gray-500">Kamis, 20 September 2021</p>
              </div>
            </div>

            <div className="my-1 px-1 py-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  className="object-cover object-center w-auto mx-auto h-full block"
                  src="/news.png"
                />
              </a>
              <div className="mt-4 mx-auto max-w-2xl w-80">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Judul berita yang panjang bangetJudul berita yang panjang
                  banget Judul berita yang panjang banget
                </h2>
                <p className="mt-2 mx-auto text-gray-500">Kamis, 20 September 2021</p>
              </div>
            </div>

            <div className="my-1 px-1 py-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  className="object-cover object-center w-auto mx-auto h-full block"
                  src="/news.png"
                />
              </a>
              <div className="mt-4 mx-auto max-w-2xl w-80">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Judul berita yang panjang bangetJudul berita yang panjang
                  banget Judul berita yang panjang banget
                </h2>
                <p className="mt-2 mx-auto text-gray-500">Kamis, 20 September 2021</p>
              </div>
            </div>

            <div className="my-1 px-1 py-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  className="object-cover object-center w-auto mx-auto h-full block"
                  src="/news.png"
                />
              </a>
              <div className="mt-4 mx-auto max-w-2xl w-80">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Judul berita yang panjang banget judul berita yang panjang
                  banget Judul berita yang panjang banget
                </h2>
                <p className="mt-2 mx-auto text-gray-500">Kamis, 20 September 2021</p>
              </div>
            </div>

            <div className="my-1 px-1 py-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  className="object-cover object-center w-auto mx-auto h-full block"
                  src="/news.png"
                />
              </a>
              <div className="mt-4 mx-auto max-w-2xl w-80">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Judul berita yang panjang banget Judul berita yang panjang
                  banget Judul berita yang panjang banget
                </h2>
                <p className="mt-2 mx-auto text-gray-500">Kamis, 20 September 2021</p>
              </div>
            </div>

            <div className="my-1 px-1 py-4 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  className="object-cover object-center w-auto mx-auto h-full block"
                  src="/news.png"
                />
              </a>
              <div className="mt-4 mx-auto max-w-2xl w-80">
                <h2 className="text-gray-900 title-font text-md font-medium">
                  Judul berita yang panjang bangetJudul berita yang panjang
                  banget Judul berita yang panjang banget
                </h2>
                <p className="mt-2 mx-auto text-gray-500">Kamis, 20 September 2021</p>
              </div>
            </div>
          </div>
          <Link href="/newspage">
          <button className="inline-flex items-center justify-center bg-yellow-300 hover:bg-yellow-400 mx-auto px-12 py-2 focus:outline-none rounded-sm text-lg text-black font-thin mb-16">
            Lihat Lainnya
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default News;
