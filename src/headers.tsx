import { Link } from "react-router-dom";
import Math from "./assets/download.jpg";
import { useState } from "react";
function Header() {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <header className="bg-amber-500 pt-[10px]! pb-[10px]!">
        <div className="container flex flex-row-reverse justify-between items-center">
          <div
            onClick={() => {
              setBurger(!burger);
            }}
            className={burger ? `burger active` : `burger`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={Math} className="w-[100px]!" alt="Math" />
          <nav className={burger ? "nav-active" : ""}>
            <ul className="flex">
              <li className="pr-[20px]! text-2xl font-bold hover:text-blue-700">
                <Link to="/videos">الفيديوهات</Link>
              </li>
              <li className="pr-[20px]! text-2xl font-bold hover:text-blue-700">
                <Link to="/powerpoints">الملفات</Link>
              </li>
              <li className="pr-[20px]! text-2xl font-bold hover:text-blue-700">
                <Link to="/all">المحتوى كامل</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
