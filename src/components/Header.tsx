import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-10">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo + Nom */}
        <div className="flex items-center space-x-3">
          <img src="ali.png" alt="ali" className="w-14 h-14" />
          <h1 className="text-xl font-bold text-blue-950">Abdelali Lebbar</h1>
        </div>

        {/* Hamburger pour mobile */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu principal */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-gray-700 font-medium`}
        >
          <li>
            <a href="#hero" className="hover:text-blue-500">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              À propos
            </a>
          </li>
          <li>
            <a href="#competences" className="hover:text-blue-500">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
