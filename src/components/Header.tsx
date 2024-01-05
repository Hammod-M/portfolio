export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="header__block mb-8 sm:mb-16 flex flex-col sm:flex-row flex-center justify-between items-center ">
          <div className="logo mb-5 sm:mb-0">
            <a href="/" className="logo__link">
              <span className="logo__text text-6xl">{`}{/\\/\\`}</span>
            </a>
          </div>
          <div className="nav">
            <div className="menu flex gap-3">
              <li className="list-none">
                <a href="#" className="no-underline text-lg text-black-200">
                  About
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#projects"
                  className="no-underline text-lg text-black-200"
                >
                  Projects
                </a>
              </li>
              <li className="list-none">
                <a
                  href="#reviews"
                  className="no-underline text-lg text-black-200"
                >
                  Reviews
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
