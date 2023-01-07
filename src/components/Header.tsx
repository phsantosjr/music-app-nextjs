export default function Header() {
    return (
      <div className="px-6 pb-4 pt-4 lg:px-8 bg-metal w-screen">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8"
                  src="/music-app.png"
                  alt="Music App"
                />
              </a>
            </div>
            <div className="flex text-white bold">
              <h1>MUSIC APP</h1>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="https://github.com/phsantosjr?tab=repositories"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 
                text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white"
                target="_blank"
                rel="noreferrer"
              >
                Portfólio
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }