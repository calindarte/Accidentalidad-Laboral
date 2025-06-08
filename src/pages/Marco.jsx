import { CheckCircle, FileText } from "lucide-react";

const Marco = () => {
  return (
    <section
      id="marco"
      className="bg-gradient-to-r py-20 md:py-28 px-12 md:px-32 from-slate-50 to-orange-50 rounded-2xl p-8"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-slate-800 flex items-center mb-8">
        <FileText className="mr-2 h-6 w-6 text-orange-600" />
        Marco Normativo Colombiano
      </h2>
      <p className="text-gray-700 text-justify leading-relaxed mb-12">
        En Colombia, el tratamiento de la accidentalidad laboral se encuentra
        regulado por un conjunto de normas que establecen las obligaciones de
        empleadores, trabajadores, administradoras de riesgos laborales (ARL) y
        el Estado para garantizar ambientes de trabajo seguros y saludables.
        Este marco legal tiene como objetivo la prevención de accidentes y
        enfermedades laborales, así como el adecuado registro, notificación y
        gestión de los eventos que ocurren.{" "}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Columna 1 */}
        <div className="space-y-4">
          <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-orange-100 text-orange-800">
              Ley 1562/2012
            </span>

            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Modifica el sistema general de riesgos laborales.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Reafirma la responsabilidad del empleador en la implementación
                  del Sistema de Gestión de la Seguridad y Salud en el Trabajo
                  (SG-SST).
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Define el accidente de trabajo como “todo suceso repentino que
                  sobrevenga por causa o con ocasión del trabajo...”.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-green-100 text-green-800">
              Decreto 1072/2015
            </span>

            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Compila todas las normas del sector trabajo.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Establece el SG-SST como obligatorio para todas las empresas.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Define el procedimiento para el reporte e investigación de
                  accidentes de trabajo y enfermedades laborales.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-blue-100 text-blue-800">
              Resolución 0312/2019
            </span>

            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Define los estándares mínimos del SG-SST que toda empresa debe
                  cumplir.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Incluye obligaciones sobre registro y análisis de
                  accidentalidad.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="space-y-4">
          <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-purple-100 text-purple-800">
              Decreto 1295/1994
            </span>

            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Regula la organización y administración del Sistema General de
                  Riesgos Laborales.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Establece las funciones de las ARL y define claramente el
                  proceso de calificación, atención y reporte de accidentes de
                  trabajo.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-yellow-100 text-yellow-800">
              Resolución 1401/2007
            </span>

            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Reglamenta la investigación de incidentes y accidentes de
                  trabajo.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Obliga al empleador a conformar un equipo investigador y a
                  generar recomendaciones preventivas.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-pink-100 text-pink-800">
              Otras disposiciones relevantes
            </span>

            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Ley 100 de 1993: Crea el Sistema de Seguridad Social Integral.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Resolución 2646 de 2008: Relacionada con riesgos
                  psicosociales, que pueden derivar en accidentes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-800 mt-[2px] flex-shrink-0" />
                <span className="leading-relaxed">
                  Circular 070 de 2020 (Ministerio del Trabajo): Lineamientos
                  sobre notificación de accidentes graves o mortales.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm">
          <span className="inline-block px-3 py-1 text-lg font-semibold rounded bg-gray-100 text-gray-800">
            ★ Importancia del marco normativo
          </span>
          <span>El cumplimiento de este marco normativo:</span>

          <ul className="text-sm text-slate-700 space-y-3 pl-1">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-800 mt-[2px] flex-shrink-0" />
              <span className="leading-relaxed">
                Protege la vida y salud de los trabajadores.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-800 mt-[2px] flex-shrink-0" />
              <span className="leading-relaxed">
                Reduce la ocurrencia de accidentes laborales.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-800 mt-[2px] flex-shrink-0" />
              <span className="leading-relaxed">
                Asegura la trazabilidad y seguimiento de los eventos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-800 mt-[2px] flex-shrink-0" />
              <span className="leading-relaxed">
                Evita sanciones legales a las empresas.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Marco;
