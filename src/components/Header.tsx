const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-10">
      <nav className="container mx-auto flex justify-center-safe items-center p-4 gap-6">
        <img src="ali.png" alt="ali" className=" w-20 h-17" />
        <a href="#about" className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-blue-950 hover:text-blue-700 hover:scale-105 transform transition-all duration-300 cursor-pointer">
            Abdelali Lebbar
          </h1>
        </a>
        <ul className="flex space-x-6 text-gray-700 font-medium">
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
