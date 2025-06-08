import { BarChart3, Lightbulb, Shield, TrendingUp } from "lucide-react";

const Ecuaciones = () => {

  return (
    <section id="ecuaciones" className="py-20 md:py-28 px-12 md:px-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Ecuaciones de Primer Grado
          </h2>
          <p className="md:text-xl text-slate-600 max-w-3xl mx-auto">
            Aplicación de Ecuaciones de Primer grado en el análisis de
            accidentalidad de una empresa:
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl md:text-4xl text-center font-bold text-slate-800 flex items-center mb-8">
              ¿Qué es una ecuación de primer grado?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-justify">
              Una ecuación de primer grado, o ecuación lineal, es una igualdad
              algebraica cuya potencia es equivalente a uno, pudiendo contener
              una, dos o más incógnitas.
              <p className="mt-3">
                <strong>Ecuación de primer grado:</strong> Dicho de otra manera,
                una ecuación de primer grado, también conocida como ecuación
                lineal, es básicamente una fórmula matemática que nos dice que
                dos cosas son iguales. Estas ecuaciones pueden tener una, dos o
                más variables (las incógnitas que estamos tratando de
                encontrar), pero siempre trabajan bajo la misma regla: la mayor
                potencia de estas variables es uno.
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
              donde a y b son números reales, y a ≠ 0. Resolver una ecuación de
              primer grado consiste en encontrar el valor de la incógnita que
              hace que la igualdad sea verdadera.
            </p>
            <p className="text-slate-600 mb-6 mt-3 leading-relaxed text-justify">
              Si tenemos una ecuación con dos variables, se parecerá más a esto:
            </p>
            <div className="bg-slate-100 rounded-lg p-6 font-mono text-center text-lg">
              ax + by = c
            </div>
            <p className="text-slate-600 mb-6 mt-5 leading-relaxed text-justify flex flex-col gap-y-3">
              <span>
                Estas ecuaciones nos permiten jugar con dos incógnitas a la vez,
                «x» y «y». En este caso, «a» nos indica la inclinación o
                pendiente de nuestra línea cuando dibujamos la ecuación en un
                gráfico, y «b» sigue siendo un número fijo.{" "}
              </span>

              <span>
                Es importante saber que algunas ecuaciones pueden no tener
                solución, es decir, no hay ningún número que satisfaga la
                igualdad. A estas se les llama ecuaciones sin solución. Por otro
                lado, algunas ecuaciones tienen infinitas soluciones, lo que
                significa que hay muchos números que podrían funcionar.
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
            <h2 className="text-2xl md:text-4xl text-center font-bold text-slate-800 flex items-center mb-4">
              Elementos de una ecuación de primer grado
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed text-justify">
              Al observar la ilustración siguiente, nos daremos cuenta de que en
              una ecuación intervienen varios elementos. Veamos:
            </p>

            <img
              src="https://economipedia.com/wp-content/uploads/Elementos-de-una-ecuacion-de-primer-grado.png"
              alt="ecuacion-primer-grado"
              className="mx-auto w-full max-w-md mb-10 rounded"
            />

            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                Elementos de la ecuación
              </h3>
              <ul className="text-slate-700 text-sm space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>{" "}
                  <span>Términos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>{" "}
                  <span>Miembros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>{" "}
                  <span>Incógnitas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>{" "}
                  <span>Términos independientes.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                Resolver ecuaciones de primer grado con una incógnita
              </h3>
              <p className="text-slate-700 text-justify leading-relaxed mb-4 text-sm">
                Prácticamente, resolver una ecuación, en este caso de primer
                grado, es determinar el valor de la incógnita que satisfaga la
                igualdad. Los pasos son los siguientes:
              </p>
              <ul className="text-slate-700 text-sm space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>
                    Agrupar los términos semejantes. Es decir, pasar los
                    términos que contengan variables al lado izquierdo de la
                    expresión y las constantes al lado derecho.
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
              La importancia de las ecuaciones de primer grado en el análisis de
              la accidentalidad laboral se basa en su capacidad para expresar,
              examinar y anticipar de manera simple cómo diversos factores
              influyen en la aparición de accidentes dentro de una empresa. Así
              mismo, permite:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 ">
                  Representar relaciones simples entre factores laborales y
                  accidentes.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Lightbulb className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 ">Predecir riesgos.</span>
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
        
      </div>
    </section>
  );
};

export default Ecuaciones;
