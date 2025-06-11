import { useState } from "react";
import { Menu, Shield, X } from "lucide-react";

const Header = ({ scrollToSection,setActiveSection,activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (sectionId) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    setMenuOpen(false); // Cierra el menú en móviles
  };

  const getButtonClass = (id) =>
    `block transition-colors px-4 py-2 rounded ${
      activeSection === id
        ? "text-orange-600 font-semibold"
        : "text-slate-600 hover:text-orange-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-slate-800">SST</span>
          </div>

          {/* Botón menú hamburguesa (visible en móviles) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="h-6 w-6 text-slate-800" />
              ) : (
                <Menu className="h-6 w-6 text-slate-800" />
              )}
            </button>
          </div>

          {/* Menú horizontal (desktop) */}
          <div className="hidden md:flex items-center ">
            <button onClick={() => handleClick("inicio")} className={getButtonClass("inicio")}>
              Inicio
            </button>
            <button onClick={() => handleClick("definicion")} className={getButtonClass("definicion")}>
              Definición
            </button>
            <button onClick={() => handleClick("marco")} className={getButtonClass("marco")}>
              Marco Normativo
            </button>
            <button onClick={() => handleClick("ecuaciones")} className={getButtonClass("ecuaciones")}>
              Ecuaciones
            </button>
            <button onClick={() => handleClick("metodos")} className={getButtonClass("metodos")}>
              Métodos
            </button>
            <button onClick={() => handleClick("ejemplos")} className={getButtonClass("ejemplos")}>
              Ejercicios
            </button>
           
          </div>
        </nav>

        {/* Menú desplegable (móviles) */}
        {menuOpen && (
          <div className="md:hidden fixed w-full  mt-4 bg-white rounded shadow-lg pb-12 pt-8  space-y-6 flex  flex-col">
            <button onClick={() => handleClick("inicio")} className={getButtonClass("inicio")}>
              Inicio
            </button>
            <button onClick={() => handleClick("definicion")} className={getButtonClass("definicion")}>
              Definición
            </button>
            <button onClick={() => handleClick("marco")} className={getButtonClass("marco")}>
              Marco Normativo
            </button>
            <button onClick={() => handleClick("ecuaciones")} className={getButtonClass("ecuaciones")}>
              Ecuaciones
            </button>
            <button onClick={() => handleClick("metodos")} className={getButtonClass("metodos")}>
              Métodos
            </button>
            <button onClick={() => handleClick("ejemplos")} className={getButtonClass("ejemplos")}>
              Ejercicios
            </button>
            
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
