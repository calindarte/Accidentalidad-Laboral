import { ExternalLink, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-20 md:py-18 px-12 md:px-20">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          {...fadeUp}
        >
          {/* Logo y descripción */}
          <motion.div {...fadeUp}>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-orange-400" />
              <span className="text-xl font-bold">SST</span>
            </div>
            <p className="text-slate-300 text-sm">
              Accidentalidad Laboral en una Empresa
            </p>
          </motion.div>

          {/* Universidad Info */}
          <motion.div {...fadeUp}>
            <h4 className="font-semibold mb-4">Universidad del Magdalena</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Administración de la Seguridad y Salud en el Trabajo</li>
              <li>Razonamiento y representación matemática</li>
              <li>Grupo: G16</li>
              <li>Docente: David Alejandro Coral Cayón</li>
              <li>Junio 2025</li>
            </ul>
          </motion.div>

          {/* Referencias */}
          <motion.div {...fadeUp}>
            <h4 className="font-semibold mb-4">Referencias</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                {
                  label: "Sistemas de ecuaciones de primer grado - Hiru",
                  url: "https://www.hiru.eus/es/matematicas/sistemas-de-ecuaciones-de-primer-grado#:~:text=M%C3%A9todo%20de%20reducci%C3%B3n&text=Se%20restan%20las%20dos%20ecuaciones,iniciales%20para%20calcular%20la%20segunda",
                },
                {
                  label: "Daniel Carreón (2020) – Método de Sustitución",
                  url: "https://www.youtube.com/watch?v=L0QuX9RpEoM",
                },
                {
                  label: "Daniel Carreón (2017) – Método de Igualación",
                  url: "https://www.youtube.com/watch?v=0rfGZsRVTz4",
                },
                {
                  label: "Daniel Carreón (2020) – Método de Reducción (Suma y Resta)",
                  url: "https://www.youtube.com/watch?v=TR27etegq7g",
                },
                {
                  label: "Ministerio de Trabajo – Marco Legal",
                  url: "https://www.mintrabajo.gov.co/web/guest/marco-legal",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400"
          {...fadeUp}
        >
          <p>
            &copy; 2025 Universidad del Magdalena. Proyecto académico con fines
            educativos.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
