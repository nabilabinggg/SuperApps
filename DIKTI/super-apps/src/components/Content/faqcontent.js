function FaqContent() {
  return (
    <section className="body-font items-center mx-16 my-auto">
      <div className="container mx-auto my-16">
        <div class="container flex justify-end items-center px-4 sm:px-6 lg:px-8">
          <div class="relative">
            <div class="absolute top-4 left-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </div>{" "}
            <input
              type="text"
              class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
              placeholder="Cari Informasi Layanan  "
            />
          </div>
        </div>
        <h1 className="text-4xl font-medium title-font mb-16 text-purple-700 text-center items-center justify-center">
          Pertanyaan Umum FAQ
        </h1>
      </div>
    </section>
  );
}

export default FaqContent;
