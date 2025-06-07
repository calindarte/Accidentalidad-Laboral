import { Calendar, Mail, Shield } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Investigación SST</h3>
                  <p className="text-xs text-gray-400">Universidad XYZ - 2024</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Investigación académica sobre sistemas de gestión de seguridad y salud en el trabajo en el sector
                industrial.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">investigacion.sst@universidad.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">Publicado: Diciembre 2024</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Navegación</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#introduccion" className="hover:text-blue-400 transition-colors">
                    Introducción
                  </a>
                </li>
                <li>
                  <a href="#marco-teorico" className="hover:text-blue-400 transition-colors">
                    Marco Teórico
                  </a>
                </li>
                <li>
                  <a href="#metodologia" className="hover:text-blue-400 transition-colors">
                    Metodología
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="hover:text-blue-400 transition-colors">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#conclusiones" className="hover:text-blue-400 transition-colors">
                    Conclusiones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Recursos</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Descargar PDF Completo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Datos de la Investigación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Presentación Ejecutiva
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Material Complementario
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Contacto</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Equipo de Investigación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Director del Proyecto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Colaboradores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Instituciones Participantes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Universidad XYZ. Todos los derechos reservados. Esta investigación está
              licenciada bajo Creative Commons.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
