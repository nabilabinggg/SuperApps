import { ChevronDownIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="body-font bg-blue-500 h-22">
            <div className="container flex flex-wrap flex-col md:flex-row items-center">
                <img className="mx-11 py-3.5" src="/Logoditjen.png" />

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 text-lg text-white hover:text-black">Beranda</a>
                    <a className="flex flex-wrap mr-5 text-lg text-white hover:text-black">Layanan
                        <ChevronDownIcon className="w-6 ml-0.5" aria-hidden="true" />
                    </a>
                    <a className="mr-5 text-lg text-white hover:text-black">Tentang Aplikasi</a>
                    <a className="mr-5 text-lg text-white hover:text-black">Bot/FAQ</a>
                    <a className="mr-5 text-lg text-white hover:text-black">Profil</a>
                </nav>
            </div>
        </header>
    )
}
export default Header