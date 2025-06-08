import { Calculator, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="py-20 md:py-28 px-12 md:px-32 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-center gap-20 items-center">
        {/* Contenido textual con animación */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center lg:text-left"
        >
          <span className="inline-block mb-6 px-3 py-1 rounded-xl bg-orange-100 text-orange-800 hover:bg-orange-200 text-sm font-medium">
            Universidad del Magdalena • Junio 2025
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight pr-12">
            Accidentalidad Laboral en una
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {" "}Empresa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
            Aplicación de ecuaciones de primer grado en el análisis de accidentalidad laboral.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("definicion")}
              className="flex items-center px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition"
            >
              Explorar Conceptos
              <ChevronRight className="ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("ejemplos")}
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-lg transition"
            >
              Ver Ejemplos
              <Calculator className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Imagen ilustrativa con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-seguridad-edificio_114360-7300.jpg?semt=ais_items_boosted&w=740"
            alt="imagen_SST"
            className="w-full h-auto object-cover shadow-md "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
