import { useState } from "react";
import {
  Calculator,
  Shield,
  AlertTriangle,
  TrendingUp,
  FileText,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  BarChart3,
  Clock,
  Building2,
  Lightbulb,
  Users2,
  Activity,
  CheckCircle,
  CalendarRange,
} from "lucide-react";

const Home = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [tab, setTab] = useState("sustitucion");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-slate-800"></span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("accidentalidad")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Accidentalidad
              </button>
              <button
                onClick={() => scrollToSection("marco")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Marco Normativo
              </button>
              <button
                onClick={() => scrollToSection("ecuaciones")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Ecuaciones
              </button>
              <button
                onClick={() => scrollToSection("metodos")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Métodos
              </button>
              <button
                onClick={() => scrollToSection("ejemplos")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Ejemplos
              </button>
              <button
                onClick={() => scrollToSection("autores")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Autores
              </button>
              <button
                onClick={() => scrollToSection("referencias")}
                className="text-slate-600 hover:text-orange-600 transition-colors"
              >
                Referencias
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <span className="mb-6 px-2 rounded-md bg-orange-100 text-orange-800 hover:bg-orange-200">
              Universidad del Magdalena • Junio 2025
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight mx-10">
              Accidentalidad Laboral en una
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                {" "}
                Empresa
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Aplicación de ecuaciones de primer grado en el análisis de
              accidentalidad laboral
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("accidentalidad")}
                className="flex items-center px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-lg text-lg transition"
              >
                Explorar Conceptos
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection("ejemplos")}
                className="flex items-center px-6 py-3 border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-lg text-lg transition"
              >
                Ver Ejemplos
                <Calculator className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptos Básicos */}
      <section id="conceptos" className="py-16 px-40 bg-white">
        <div className="container mx-auto">
          <div className="text-left mb-10">
            <h2 className="text-4xl font-bold text-slate-800">
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

          {/* Marco Normativo */}
          <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-slate-800 flex items-center mb-8">
              <FileText className="mr-2 h-6 w-6 text-orange-600" />
              Marco Normativo Colombiano
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed mb-12">
              En Colombia, el tratamiento de la accidentalidad laboral se
              encuentra regulado por un conjunto de normas que establecen las
              obligaciones de empleadores, trabajadores, administradoras de
              riesgos laborales (ARL) y el Estado para garantizar ambientes de
              trabajo seguros y saludables. Este marco legal tiene como objetivo
              la prevención de accidentes y enfermedades laborales, así como el
              adecuado registro, notificación y gestión de los eventos que
              ocurren.{" "}
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
                        Reafirma la responsabilidad del empleador en la
                        implementación del Sistema de Gestión de la Seguridad y
                        Salud en el Trabajo (SG-SST).
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-[2px] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Define el accidente de trabajo como “todo suceso
                        repentino que sobrevenga por causa o con ocasión del
                        trabajo...”.
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
                        Establece el SG-SST como obligatorio para todas las
                        empresas.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-800 mt-[2px] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Define el procedimiento para el reporte e investigación
                        de accidentes de trabajo y enfermedades laborales.
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
                        Define los estándares mínimos del SG-SST que toda
                        empresa debe cumplir.
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
                        Regula la organización y administración del Sistema
                        General de Riesgos Laborales.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-800 mt-[2px] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Establece las funciones de las ARL y define claramente
                        el proceso de calificación, atención y reporte de
                        accidentes de trabajo.
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
                        Reglamenta la investigación de incidentes y accidentes
                        de trabajo.
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-800 mt-[2px] flex-shrink-0" />
                      <span className="leading-relaxed">
                        Obliga al empleador a conformar un equipo investigador y
                        a generar recomendaciones preventivas.
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
                        Ley 100 de 1993: Crea el Sistema de Seguridad Social
                        Integral.
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
                        Circular 070 de 2020 (Ministerio del Trabajo):
                        Lineamientos sobre notificación de accidentes graves o
                        mortales.
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
          </div>
        </div>
      </section>

      {/* Ecuaciones de Primer Grado */}
      <section id="ecuaciones" className="py-16 px-40">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Ecuaciones de Primer Grado
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Aplicación de Ecuaciones de Primer grado en el análisis de
              accidentalidad de una empresa:
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl text-center font-bold text-slate-800 flex items-center mb-8">
                ¿Qué es una ecuación de primer grado?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-justify">
                Una ecuación de primer grado, o ecuación lineal, es una igualdad
                algebraica cuya potencia es equivalente a uno, pudiendo contener
                una, dos o más incógnitas.
                <p className="mt-3">
                  <strong>Ecuación de primer grado:</strong> Dicho de otra
                  manera, una ecuación de primer grado, también conocida como
                  ecuación lineal, es básicamente una fórmula matemática que nos
                  dice que dos cosas son iguales. Estas ecuaciones pueden tener
                  una, dos o más variables (las incógnitas que estamos tratando
                  de encontrar), pero siempre trabajan bajo la misma regla: la
                  mayor potencia de estas variables es uno.
                </p>
                <p className="mt-3">
                  Las ecuaciones de primer grado con una incógnita poseen la
                  siguiente forma:{" "}
                </p>
              </p>
              <div className="bg-slate-100 rounded-lg p-6 font-mono text-center text-lg">
                ax + b = 0
              </div>
              <p className="text-sm text-slate-500 mt-2 text-justify">
                donde a y b son números reales, y a ≠ 0. Resolver una ecuación
                de primer grado consiste en encontrar el valor de la incógnita
                que hace que la igualdad sea verdadera.
              </p>
              <p className="text-slate-600 mb-6 mt-3 leading-relaxed text-justify">
                Si tenemos una ecuación con dos variables, se parecerá más a
                esto:
              </p>
              <div className="bg-slate-100 rounded-lg p-6 font-mono text-center text-lg">
                ax + by = c
              </div>
              <p className="text-slate-600 mb-6 mt-5 leading-relaxed text-justify flex flex-col gap-y-3">
                <span>
                  Estas ecuaciones nos permiten jugar con dos incógnitas a la
                  vez, «x» y «y». En este caso, «a» nos indica la inclinación o
                  pendiente de nuestra línea cuando dibujamos la ecuación en un
                  gráfico, y «b» sigue siendo un número fijo.{" "}
                </span>

                <span>
                  Es importante saber que algunas ecuaciones pueden no tener
                  solución, es decir, no hay ningún número que satisfaga la
                  igualdad. A estas se les llama ecuaciones sin solución. Por
                  otro lado, algunas ecuaciones tienen infinitas soluciones, lo
                  que significa que hay muchos números que podrían funcionar.
                </span>
                <span>
                  Cuando juntamos varias ecuaciones lineales, tenemos lo que se
                  llama un sistema de ecuaciones. En estos sistemas, nuestras
                  variables pueden aparecer en más de una ecuación, lo que nos
                  ayuda a encontrar sus valores de manera más eficiente.
                </span>
              </p>
            </div>
            <section className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-xl shadow-sm">
  <h2 className="text-4xl text-center font-bold text-slate-800 flex items-center mb-4">
    Elementos de una ecuación de primer grado
  </h2>

  <p className="text-slate-600 mb-6 leading-relaxed text-justify">
    Al observar la ilustración siguiente, nos daremos cuenta de que en una ecuación intervienen varios elementos. Veamos:
  </p>

  <img
    src="https://economipedia.com/wp-content/uploads/Elementos-de-una-ecuacion-de-primer-grado.png"
    alt="ecuacion-primer-grado"
    className="mx-auto w-full max-w-md mb-10 rounded"
  />

  <div className="mb-10">
    <h3 className="text-xl font-semibold text-slate-800 mb-3">Elementos de la ecuación</h3>
    <ul className="text-slate-700 text-sm space-y-2 pl-2">
      <li className="flex items-start gap-2">
        <span className="text-green-600">✓</span> <span>Términos.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-600">✓</span> <span>Miembros.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-600">✓</span> <span>Incógnitas.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-600">✓</span> <span>Términos independientes.</span>
      </li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-slate-800 mb-3">Resolver ecuaciones de primer grado con una incógnita</h3>
    <p className="text-slate-700 text-justify leading-relaxed mb-4 text-sm">
      Prácticamente, resolver una ecuación, en este caso de primer grado, es determinar el valor de la incógnita que satisfaga la igualdad. Los pasos son los siguientes:
    </p>
    <ul className="text-slate-700 text-sm space-y-2 pl-2">
      <li className="flex items-start gap-2">
        <span className="text-green-600">✓</span>
        <span>
          Agrupar los términos semejantes. Es decir, pasar los términos que contengan variables al lado izquierdo de la expresión y las constantes al lado derecho.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-green-600">✓</span>
        <span>Finalmente, se procede a despejar la incógnita.</span>
      </li>
    </ul>
  </div>
</section>


            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
      <h4 className="text-xl font-semibold text-slate-800 mb-4">
        Importancia en SST
      </h4>

      <p className="text-slate-700  leading-relaxed mb-6 text-justify">
        La importancia de las ecuaciones de primer grado en el análisis de la accidentalidad laboral
        se basa en su capacidad para expresar, examinar y anticipar de manera simple cómo diversos
        factores influyen en la aparición de accidentes dentro de una empresa. Así mismo, permite:
      </p>

      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <TrendingUp className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <span className="text-slate-700 ">
            Representar relaciones simples entre factores laborales y accidentes.
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <Lightbulb className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <span className="text-slate-700 ">
            Predecir riesgos.
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <BarChart3 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <span className="text-slate-700 ">
            Tomar decisiones basadas en datos.
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <span className="text-slate-700 ">
            Evaluar mejoras en la seguridad.
          </span>
        </li>
      </ul>
    </div>
          </div>

          <h2 className="text-4xl text-center font-bold text-slate-800 flex items-center mb-12">
Métodos para resolver ecuaciones de primer grado  
              </h2>



          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              onClick={() => setTab("sustitucion")}
              className={`py-2 px-4 rounded-md font-medium text-sm ${
                tab === "sustitucion"
                  ? "bg-orange-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Sustitución
            </button>
            <button
              onClick={() => setTab("eliminacion")}
              className={`py-2 px-4 rounded-md font-medium text-sm ${
                tab === "eliminacion"
                  ? "bg-orange-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Eliminación
            </button>
            <button
              onClick={() => setTab("igualacion")}
              className={`py-2 px-4 rounded-md font-medium text-sm ${
                tab === "igualacion"
                  ? "bg-orange-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              Igualación
            </button>
          </div>

          {/* Contenido de pestañas */}
          {tab === "sustitucion" && (
            <div className="bg-white rounded-xl shadow p-6 mt-6">
  <h3 className="text-xl font-bold mb-4">Método de Sustitución</h3>
  <p className=" text-slate-600 mb-4 text-justify">
    El método de sustitución, para resolver un sistema de dos ecuaciones con dos incógnitas,
    consiste en despejar una incógnita en una de las ecuaciones y sustituirla en la otra; así, se obtiene
    una sola ecuación con una incógnita. Una vez obtenido el valor de esta incógnita, se sustituye su
    valor en cualquiera de las ecuaciones del sistema inicial para calcular el valor de la otra
    incógnita.
  </p>

  <div className="bg-slate-50 rounded-lg p-6">
    <h4 className="font-semibold mb-4 text-slate-800">Ejemplo: Se analiza el efecto de los turnos diurnos y nocturnos en los accidentes.</h4>

    <div className="space-y-2 text-sm text-slate-700">
      <p><span className="font-semibold text-orange-600">Datos:</span></p>
      <ul className="list-disc list-inside space-y-1">
        <li>D: accidentes diurnos</li>
        <li>N: accidentes nocturnos</li>
        <li>Total de accidentes por semana: D + N = 20</li>
        <li>Se sabe que el turno nocturno tiene 6 accidentes más que el turno diurno: N = D + 6</li>
      </ul>

      <p className="mt-4 font-semibold text-orange-600">Ecuaciones:</p>
      <p>D + N = 20</p>
      <p>N = D + 6</p>

      <p className="mt-4 font-semibold">Se sustituye N en la primera ecuación</p>
      <p>D + (D + 6) = 20</p>
      <p>2D + 6 = 20</p>
      <p>2D = 20 - 6</p>
      <p>2D = 14</p>
      <p>D = 14 / 2</p>
      <p>D = 7</p>

      <p className="mt-4 font-semibold ">Se sustituye D en la segunda ecuación</p>
      <p>N = D + 6</p>
      <p>N = 7 + 6 = 13</p>
      <p>N = 13</p>

      <p className="mt-4 font-semibold text-green-700">Conclusión:</p>
      <p>Accidentes diurnos: <strong>7</strong></p>
      <p>Accidentes nocturnos: <strong>13</strong></p>
    </div>
  </div>
</div>
          )}

          {tab === "eliminacion" && (
            <div className="bg-white rounded-xl shadow p-6 mt-6">
  <h3 className="text-xl font-bold mb-4">Método de Reducción o Eliminación</h3>
  <p className="text-slate-600 mb-4 text-justify">
   El método de reducción o método de eliminación, en ecuaciones de primer grado consiste 
en sumar o restar dos ecuaciones de un sistema para eliminar una de las incógnitas, lo que 
permite resolver el sistema paso a paso, consiste en lo siguiente: 
  </p>
  <ul className="list-disc list-inside text-sm text-slate-700 mb-6 pl-4">
    <li>Se restan las dos ecuaciones resultantes, con lo que se elimina una 
incógnita.</li>
    <li>Se resuelve la ecuación con una incógnita obtenida, y se sustituye su valor 
en cualquiera de las ecuaciones iniciales para calcular la segunda.</li>
  </ul>

  <div className="bg-slate-50 rounded-lg p-6">
    <h4 className="font-semibold mb-4 text-slate-800">
      Ejemplo: Se supone que en una empresa se analizan accidentes en dos áreas distintas: A y B. 
    </h4>

    <div className="space-y-2 text-sm text-slate-700">
      <p><span className="font-semibold text-orange-600">Datos:</span></p>
      <ul className="list-disc list-inside space-y-1">
        <li>A + B = 40 (hay 40 accidentes en total)</li>
        <li>2A - B = 20 (el doble de los accidentes en A menos los de B da 20)</li>
      </ul>

      <p className="mt-4 font-semibold text-orange-600">Ecuaciones:</p>
      <p>A + B = 40</p>
      <p>2A - B = 20</p>

      <p className="mt-4 font-semibold">Se suman ambas ecuaciones:</p>
      <p>(A + B) + (2A - B) = 40 + 20</p>
      <p>(A + 2A) + (B - B) = 60</p>
      <p>3A = 60</p>

      <p className="mt-4 font-semibold">Entonces se resuelve la ecuación resultante: </p>
      <p>3A = 60</p>
      <p>A = 60 / 3</p>
      <p>A = 20</p>

      <p className="mt-4 font-semibold">Ahora se pasa a sustituir en una ecuación original:</p>
      <p>A + B = 40</p>
      <p>20 + B = 40</p>
      <p>B = 40 - 20</p>
      <p>B = 20</p>

      <p className="mt-4 font-semibold text-green-700">Conclusión:</p>
      <p>Accidentes en el área A: <strong>20</strong></p>
      <p>Accidentes en el área B: <strong>20</strong></p>
    </div>
  </div>
</div>
          )}

          {tab === "igualacion" && (
            <div className="bg-white rounded-xl shadow p-6 mt-6">
  <h3 className="text-xl font-bold mb-4">Método de Igualación</h3>
  <p className="text-slate-600 mb-4 text-justify">
    El método de igualación en ecuaciones de primer grado consiste en despejar la misma
    variable en ambas ecuaciones de un sistema y luego igualar esas expresiones para encontrar el
    valor de una incógnita. Después, ese valor se sustituye en una de las ecuaciones para obtener la
    otra variable.
  </p>

  <div className="bg-slate-50 rounded-lg p-6">
    <h4 className="font-semibold mb-4 text-slate-800">
      Ejemplo: En una empresa se analiza la cantidad de accidentes ocurridos en dos de sus 
departamentos.
    </h4>

    <div className="space-y-2 text-sm text-slate-700">
      <p><span className="font-semibold text-orange-600">Datos:</span></p>
      <ul className="list-disc list-inside space-y-1">
        <li>La suma de los accidentes de los dos departamentos da 26: A + B = 26</li>
        <li>Los accidentes en el primer departamento superan en 8 a los del segundo: A = B + 8</li>
      </ul>

      <p className="mt-4 font-semibold text-orange-600">Ecuaciones:</p>
      <p>A + B = 26</p>
      <p>A = B + 8</p>

      <p className="mt-4 font-semibold">Se despeja A en la primera ecuación:</p>
      <p>A = 26 - B</p>

      <p className="mt-4 font-semibold">Se igualan las expresiones:</p>
      <p>B + 8 = 26 - B</p>

      <p className="mt-4 font-semibold">Resolviendo la ecuación:</p>
      <p>B + B = 26 - 8</p>
      <p>2B = 18</p>
      <p>B = 18 / 2</p>
      <p>B = 9</p>

      <p className="mt-4 font-semibold">Sustituimos B en la segunda ecuación:</p>
      <p>A = B + 8</p>
      <p>A = 9 + 8</p>
      <p>A = 17</p>

      <p className="mt-4 font-semibold text-green-700">Conclusión:</p>
      <p>Accidentes en el primer departamento: <strong>17</strong></p>
      <p>Accidentes en el segundo departamento: <strong>9</strong></p>
    </div>
  </div>
</div>
          )}
        </div>
      </section>

     {/* Ejemplos Prácticos */}
<section id="ejemplos" className="py-16 px-40 bg-white">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">
        Ejemplos Prácticos
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Aplicaciones de ecuaciones de primer grado en la accidentalidad laboral de una empresa
      </p>
    </div>

<div className="grid lg:grid-cols-1 gap-8">
  <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
  <header>
    <h3 className="flex items-center text-lg font-semibold mb-4 text-slate-900">
      <Calculator className="mr-2 h-5 w-5 text-orange-600" />
      Índice de Frecuencia
    </h3>
  </header>

  <section className="space-y-4 text-sm text-slate-700">
    <div className="bg-orange-50 rounded-lg p-4">
      <p className="font-semibold text-orange-800 mb-2">Fórmula:</p>
      <p className="font-mono">IF = (N × 1,000,000) / H</p>
    </div>

    <div className="space-y-2">
      <p className="text-slate-600 font-medium">1. En una empresa se requiere calcular el índice de frecuencia (IF), con respecto a las capacitaciones.</p>

      <p><strong>Datos:</strong><br />
        ✓ N: número de accidentes con tiempo perdido → N = 20 – 4C.<br />
        ✓ H: horas-hombre trabajadas → H = 200.000 + 6.000C<br />
        ✓ C: 3 capacitaciones.<br />
        ✓ Fórmula del índice de frecuencia:<br />
        IF = (N × 1.000.000) / H
      </p>

      <p><strong>Ecuaciones:</strong><br />
        N = 20 – 4C<br />
        H = 200.000 + 6.000C
      </p>

      <p><strong>Sustituir en la fórmula del IF:</strong><br />
        IF = (20 − 4C) × 1.000.000 / (200.000 + 6.000C)<br />
        Ahora se multiplica el numerador:<br />
        IF = (20.000.000 − 4.000.000C) / (200.000 + 6.000C)<br />
        Se simplifica todo dividiendo entre 1.000:<br />
        IF = (20.000 − 4.000C) / (200 + 6C)
      </p>

      <p><strong>Se calcula con C = 3:</strong><br />
        IF = (20.000 − 12.000) / (200 + 18) = 8.000 / 218 = <span className="font-bold text-orange-600">36.69</span>
      </p>

      <p><strong>Conclusión:</strong><br />
        Con 3 capacitaciones, el índice de frecuencia es aproximadamente <span className="font-bold text-orange-600">36.69</span>.
      </p>
    </div>
  </section>
</article>


      <p><strong>1. En una empresa se requiere calcular el índice de frecuencia (IF), con respecto a las capacitaciones.</strong></p>
      <p><strong>Datos:</strong><br/>✓ N: número de accidentes con tiempo perdido → N = 20 – 4C.<br/>✓ H: horas-hombre trabajadas → H = 200.000 + 6.000C<br/>✓ C: 3 capacitaciones.<br/>✓ Fórmula del índice de frecuencia:<br/>IF = (N × 1.000.000) / H</p>
      <p><strong>Ecuaciones:</strong><br/>N = 20 – 4C<br/>H = 200.000 + 6.000C</p>
      <p><strong>Sustituir en la fórmula del IF:</strong><br/>IF = (20 − 4C) × 1.000.000 / (200.000 + 6.000C)<br/>Ahora se multiplica el numerador:<br/>IF = (20.000.000 − 4.000.000C) / (200.000 + 6.000C)<br/>Se simplifica todo dividiendo entre 1.000:<br/>IF = (20.000 − 4.000C) / (200 + 6C)</p>
      <p><strong>Se calcula con C = 3:</strong><br/>IF = (20.000 − 12.000) / (200 + 18) = 8.000 / 218 = <strong>36.69</strong></p>
      <p><strong>Conclusión:</strong> Con 3 capacitaciones, el índice de frecuencia es aproximadamente 36.69.</p>

      <p><strong>2. Una empresa desea calcular el índice de severidad, teniendo en cuenta que tienen dos turnos de trabajo, turno diurno TD y TN.</strong></p>
      <p><strong>Datos:</strong><br/>✓ D = TD + TN<br/>✓ TN = TD + 15<br/>✓ H = 80.000<br/>✓ Fórmula índice de severidad: IS = (D × 1.000.000) / H</p>
      <p><strong>Sustitución:</strong><br/>D = TD + TN = TD + (TD + 15) = 2TD + 15<br/>IS = (2TD + 15) × 1.000.000 / 80.000<br/>Con TD = 20 → D = 2(20) + 15 = 55<br/>IS = 55 × 1.000.000 / 80.000 = <strong>687.5</strong></p>
      <p><strong>Conclusión:</strong> Si en el turno diurno se pierden 20 días, el índice de severidad IS = 687.5.</p>

      <p><strong>3. En una empresa se registran accidentes durante dos tipos de jornada:</strong></p>
      <p><strong>Datos:</strong><br/>✓ D + N = 44<br/>✓ D = 3N – 8</p>
      <p><strong>Despejes:</strong><br/>De la ecuación (1): D = 44 – N<br/>Ecuación (2): D = 3N – 8</p>
      <p><strong>Igualamos:</strong><br/>44 – N = 3N – 8<br/>52 = 4N → N = 13<br/>D = 44 – 13 = <strong>31</strong></p>
      <p><strong>Conclusión:</strong> Jornada diurna: 31 accidentes · Jornada nocturna: 13 accidentes.</p>

      <p><strong>4. Una empresa tiene dos plantas de producción y se desea calcular el índice de incidencia de accidentes en total.</strong></p>
      <p><strong>Datos:</strong><br/>✓ A + B = 60<br/>✓ A = 3B – 8<br/>✓ H = 140.000<br/>✓ Fórmula: II = (N × 200.000) / H</p>
      <p><strong>Despejes:</strong><br/>De la primera: A = 60 – B<br/>Igualamos: 60 – B = 3B – 8 → 68 = 4B → B = 17<br/>A = 60 – 17 = <strong>43</strong></p>
      <p><strong>Calculo del índice:</strong><br/>N = A + B = 60<br/>II = (60 × 200.000) / 140.000 = <strong>85.71</strong></p>
      <p><strong>Conclusión:</strong> Planta A: 43 accidentes · Planta B: 17 accidentes · II total: 85.71</p>

      <p><strong>5. Una empresa de transporte analiza los accidentes laborales del primer y segundo trimestre del año.</strong></p>
      <p><strong>Datos:</strong><br/>✓ T1 + T2 = 46<br/>✓ T2 – T1 = 6</p>
      <p><strong>Reorganizando:</strong><br/>T2 – T1 = 6 → –T1 + T2 = 6</p>
      <p><strong>Suma de ecuaciones:</strong><br/>(T1 + T2) + (–T1 + T2) = 46 + 6 → 2T2 = 52 → T2 = 26<br/>T1 = 46 – 26 = <strong>20</strong></p>
      <p><strong>Conclusión:</strong> Primer trimestre: 20 accidentes · Segundo trimestre: 26 accidentes</p>
    </div>
  </div>
</section>



      {/* Autores */}
      <section id="autores" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Autores del Proyecto
            </h2>
            <p className="text-xl text-slate-600">
              Estudiantes de Administración de la Seguridad y Salud en el
              Trabajo
            </p>
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

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-orange-400" />
                <span className="text-xl font-bold">SST Analytics</span>
              </div>
              <p className="text-slate-300 text-sm">
                Proyecto académico sobre razonamiento algebraico aplicado a la
                seguridad y salud en el trabajo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Universidad del Magdalena</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Administración de la Seguridad y Salud en el Trabajo</li>
                <li>Grupo: G16</li>
                <li>Docente: David Alejandro Coral Cayón</li>
                <li>Junio 2025</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Referencias</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-3 w-3" />
                  <span>Ministerio de Trabajo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-3 w-3" />
                  <span>Sistemas de ecuaciones - Hiru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-3 w-3" />
                  <span>Videos educativos - YouTube</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; 2025 Universidad del Magdalena. Proyecto académico con
              fines educativos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
