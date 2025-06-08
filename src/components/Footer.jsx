import { ExternalLink, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-20 md:py-18 px-12 md:px-20">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center  space-x-2 mb-4">
              <Shield className="h-6 w-6 text-orange-400" />
              <span className="text-xl font-bold">SST</span>
            </div>
            <p className="text-slate-300 text-sm">
              Proyecto académico sobre razonamiento algebraico aplicado a la
              seguridad y salud en el trabajo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 ">Universidad del Magdalena</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Administración de la Seguridad y Salud en el Trabajo</li>
              <li> Razonamiento y representación matemática </li>
              <li>Grupo: G16</li>
              <li>Docente: David Alejandro Coral Cayón</li>
              <li>Junio 2025</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 ">Referencias</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://www.hiru.eus/es/matematicas/sistemas-de-ecuaciones-de-primer-grado#:~:text=M%C3%A9todo%20de%20reducci%C3%B3n&text=Se%20restan%20las%20dos%20ecuaciones,iniciales%20para%20calcular%20la%20segunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Sistemas de ecuaciones de primer grado - Hiru
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 " />
                <a
                  href="https://www.youtube.com/watch?v=L0QuX9RpEoM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Daniel Carreón (2020) – Método de Sustitución
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 " />
                <a
                  href="https://www.youtube.com/watch?v=0rfGZsRVTz4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Daniel Carreón (2017) – Método de Igualación
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 " />
                <a
                  href="https://www.youtube.com/watch?v=TR27etegq7g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Daniel Carreón (2020) – Método de Reducción (Suma y Resta)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 " />
                <a
                  href="https://www.mintrabajo.gov.co/web/guest/marco-legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Ministerio de Trabajo – Marco Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; 2025 Universidad del Magdalena. Proyecto académico con fines
            educativos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
