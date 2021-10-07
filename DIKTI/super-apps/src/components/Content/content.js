import Link from "next/link";
function Content() {
  return (
    <section className="body-font items-center mx-16 my-auto">
      <div className="container mx-auto my-16">
        <h1 className="text-4xl font-medium title-font mb-16 text-purple-700 text-center items-center justify-center">
          Layanan Dikti
        </h1>

        <div className="flex flex-wrap -m-4 justify-center">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="https://pddikti.kemdikbud.go.id/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    PDDikti
                  </h3>
                  <img
                    className="h-40 rounded w-auto object-cover object-center mx-auto mb-6"
                    src="/PDDIKTI.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="https://kampusmerdeka.kemdikbud.go.id/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    Kampus Merdeka
                  </h3>
                  <img
                    className="h-40 rounded w-auto object-cover object-center mx-auto mb-6"
                    src="/KM.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="https://kedaireka.id/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    Kedaireka
                  </h3>
                  <img
                    className="h-40 rounded w-auto object-cover object-center mx-auto mb-6"
                    src="/Kedaireka.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="https://ijazahln.kemdikbud.go.id/ijazahln/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    Penyetaraan Ijazah LN
                  </h3>
                  <img
                    className="h-40 rounded w-auto object-cover object-center mx-auto mb-6"
                    src="/IjazahLN.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="https://ijazah.kemdikbud.go.id/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    SIVIL
                  </h3>
                  <img
                    className="h-40 rounded w-auto object-cover object-center mx-auto mb-6"
                    src="/SIVIL.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="https://pak.kemdikbud.go.id/portalv2/selancar-pak/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    Selancar PAK
                  </h3>
                  <img
                    className="h-40 rounded w-full object-cover object-center mx-auto mb-6"
                    src="/SelancarPAK.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4">
            <Link href="http://silemkerma.kemdikbud.go.id/">
              <a target="_blank" rel="noreferrer">
                <div className="bg-white p-6 rounded-lg border-4 border-transparent hover:border-gray-300">
                  <h3 className="text-purple-900 text-xl font-medium title-font text-center mb-2">
                    Silemkerma
                  </h3>
                  <img
                    className="h-40 rounded w-auto object-cover object-center mx-auto mb-6"
                    src="/logo-kemendikbud.png"
                    alt="content"
                  />
                  <p className="leading-relaxed text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    className="object-cover object-center mx-auto mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.1451 17.8074C30.2501 17.7092 30.3735 17.6325 30.5085 17.5815C30.6434 17.5305 30.7871 17.5064 30.9315 17.5104C31.0758 17.5145 31.2179 17.5466 31.3497 17.6051C31.4815 17.6635 31.6004 17.747 31.6996 17.851C31.7988 17.9549 31.8763 18.0771 31.9278 18.2107C31.9793 18.3443 32.0036 18.4866 31.9996 18.6296C31.9955 18.7725 31.963 18.9132 31.904 19.0437C31.845 19.1742 31.7606 19.2919 31.6556 19.3901L21.7614 28.6425C21.5573 28.8335 21.2871 28.94 21.0062 28.94C20.7253 28.94 20.455 28.8335 20.2509 28.6425L10.3556 19.3901C10.2484 19.2926 10.1618 19.1749 10.1008 19.0439C10.0399 18.9129 10.0059 18.7713 10.0007 18.6272C9.99552 18.483 10.0193 18.3394 10.0707 18.2044C10.1221 18.0695 10.2001 17.946 10.3 17.8412C10.4 17.7363 10.5201 17.6522 10.6532 17.5937C10.7863 17.5352 10.9298 17.5034 11.0754 17.5003C11.221 17.4971 11.3658 17.5227 11.5014 17.5754C11.6369 17.6281 11.7605 17.707 11.865 17.8074L21.0062 26.3544L30.1451 17.8074Z"
                      fill="black"
                    />
                    <rect
                      x="1.75"
                      y="1.75"
                      width="39.5"
                      height="39.5"
                      rx="19.75"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Content;
