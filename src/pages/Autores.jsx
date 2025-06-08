import { Mail, Phone } from "lucide-react";

const Autores = () => {
  return (
    <section id="autores" className="py-20 md:py-28 px-12 md:px-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Información de los autores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Autor 1 */}
          <article className="text-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
            <header>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                JB
              </div>
              <h3 className="text-lg font-semibold">
                Julieth Patricia Blanco Meza
              </h3>
              <p className="text-sm text-slate-500 mb-4">ID: 20251251111</p>
            </header>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>Y_liethpatricia@hotmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>3184269982</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Tecnóloga en SST, residente en Fonseca, La Guajira
              </p>
            </div>
          </article>

          {/* Autor 2 */}
          <article className="text-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
            <header>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                MT
              </div>
              <h3 className="text-lg font-semibold">
                Mayerlis Laudith Trillos Guerra
              </h3>
              <p className="text-sm text-slate-500 mb-4">ID: 20251251093</p>
            </header>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>Mayerlistrillosguerra@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>3207684263</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Supervisor SISO, experiencia en múltiples sectores
              </p>
            </div>
          </article>

          {/* Autor 3 */}
          <article className="text-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
            <header>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                MM
              </div>
              <h3 className="text-lg font-semibold">
                Milena Margarita Meriño Orozco
              </h3>
              <p className="text-sm text-slate-500 mb-4">ID: 20251251046</p>
            </header>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>merinomilena60@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>3004077892</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Tecnóloga en Salud Ocupacional, egresada del SENA
              </p>
            </div>
          </article>

          {/* Autor 4 */}
          <article className="text-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
            <header>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                YC
              </div>
              <h3 className="text-lg font-semibold">
                Yurainys Paola Chima Galicia
              </h3>
              <p className="text-sm text-slate-500 mb-4">ID: 20251251019</p>
            </header>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Mail className="h-4 w-4 text-slate-500" />
                <span>iker12yurainys@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-600">
                <Phone className="h-4 w-4 text-slate-500" />
                <span>3002542630</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Tecnóloga en Gestión Integrada, múltiples sectores
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Autores;
