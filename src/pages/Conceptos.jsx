import { Activity, BarChart3, Clock, Users2 } from "lucide-react"

const Conceptos = () => {
  return (
    <section id="definicion" className="py-20 md:py-28 px-12 md:px-32 bg-white">
        <div className="container mx-auto">
          <div className="text-center md:text-left mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
              ¿Qué es un accidente de trabajo?
            </h2>
          </div>

          <div className="mb-16">
            <p className="text-gray-700 text-justify leading-relaxed">
              Según la <strong>Resolución 1562 de 2012</strong> define un
              accidente de trabajo como todo suceso repentino que sobrevenga por
              causa o con ocasión del trabajo, y que produzca en el trabajador
              una lesión orgánica, una perturbación funcional o psiquiátrica,
              una invalidez o la muerte. Es también accidente de trabajo aquel
              que se produce durante la ejecución de órdenes del empleador o
              contratante durante la ejecución de una labor bajo su autoridad,
              incluso fuera del lugar y horas de trabajo.
            </p>
            <p className="mt-4">
              La <strong>accidentalidad laboral</strong> se mide así:{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2  gap-8 mb-16">
            {/* Card: Índice de Frecuencia */}
            <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="text-lg font-semibold">Índice de Frecuencia</h3>
              </div>
              <p className="text-slate-600 text-sm whitespace-pre-line">
                El índice de frecuencia mide el número de accidentes por cada
                millón de horas trabajadas. Se calcula dividiendo el total de
                accidentes laborales por el número total de horas trabajadas y
                multiplicando por un millón. Este índice ayuda a entender cuán
                comunes son los accidentes en la empresa.
              </p>
            </div>

            {/* Card: Índice de Severidad */}
            <div className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Clock className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="text-lg font-semibold">Índice de Severidad</h3>
              </div>
              <p className="text-slate-600 text-sm whitespace-pre-line">
                Este índice evalúa la gravedad de los accidentes, considerando
                el número de días perdidos debido a lesiones. Se calcula
                dividiendo el total de días perdidos por el número total de
                accidentes y multiplicando por mil. Un índice elevado indica que
                los accidentes, aunque sean pocos, son graves.
              </p>
            </div>

            {/* Card: Índice de Incidencia */}
            <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Users2 className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-semibold">Índice de Incidencia</h3>
              </div>
              <p className="text-slate-600 text-sm whitespace-pre-line">
                El índice de incidencia representa la proporción de accidentes
                laborales en relación con el número total de trabajadores
                expuestos al riesgo. Es útil para comparar la seguridad entre
                diferentes empresas o industrias.
              </p>
            </div>

            {/* Card: Índice Compuesto */}
            <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Activity className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="text-lg font-semibold">
                  Índice de Accidentabilidad Compuesto
                </h3>
              </div>
              <p className="text-slate-600 text-sm whitespace-pre-line">
                Este índice combina varios factores, como la frecuencia,
                severidad y otros elementos relevantes para dar una visión más
                completa del estado de seguridad en la empresa.
              </p>
            </div>
          </div>

          
        </div>
      </section>
  )
}

export default Conceptos
