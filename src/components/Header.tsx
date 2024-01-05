import { useRef } from "react";

export default function Header() {
  const scrollToRef = useRef<HTMLDivElement>(null)
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="header__block mb-16 flex flex-center justify-between items-center">
          <div className="logo">
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
                <a href="#" className="no-underline text-lg text-black-200">
                  Projects
                </a>
              </li>
              <li className="list-none">
                <a href="#" className="no-underline text-lg text-black-200">
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
