import 'katex/dist/katex.min.css';
import { Building2, Calculator, CalendarRange, Clock, TrendingUp } from 'lucide-react';
import { BlockMath } from "react-katex";

const Ejemplos = () => {
  return (
    <section id="ejemplos" className="py-20 md:py-28 px-12 md:px-32 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Ejemplos Prácticos
          </h2>
          <p className="md:text-xl text-slate-600 max-w-3xl mx-auto">
            Aplicaciones de ecuaciones de primer grado en la accidentalidad
            laboral de una empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <header>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-slate-900">
                <Calculator className="mr-2 h-5 w-5 text-orange-600" />
                Índice de Frecuencia
              </h3>
            </header>

            <section className="space-y-4 text-sm text-slate-700">
              <div className="space-y-2">
                <p className="text-slate-600 font-medium">
                  1. En una empresa se requiere calcular el índice de frecuencia
                  (IF), con respecto a las capacitaciones.
                </p>

                <p>
                  <strong>Datos:</strong>
                  <br />
                  ✓ N: número de accidentes con tiempo perdido → N = 20 – 4C.
                  <br />
                  ✓ H: horas-hombre trabajadas → H = 200.000 + 6.000C
                  <br />
                  ✓ C: 3 capacitaciones.
                  <br />
                </p>
                <div className="bg-orange-50 rounded-lg p-4 ">
                  <p className="font-semibold text-orange-800 mb-2">Fórmula:</p>
                  <BlockMath math="IF = \dfrac{N \times 1{.}000{.}000}{H}" />
                </div>

                <p>
                  <strong>Ecuaciones:</strong>
                  <br />
                  N = 20 – 4C
                  <br />H = 200.000 + 6.000C
                </p>

                <section className="space-y-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-800">
                    Sustituir en la fórmula del IF:
                  </p>
                  <BlockMath math="IF = \dfrac{(20 - 4C) \times 1{.}000{.}000}{200{.}000 + 6{.}000C}" />
                  <p>Ahora se multiplica el numerador:</p>
                  <BlockMath math="IF = \dfrac{20{.}000{.}000 - 4{.}000{.}000}{200{.}000 + 6{.}000C}" />
                  <p className="mt-10">
                    {" "}
                    Se simplifica todo dividiendo el numerador y el denominador
                    entre 1.000:
                  </p>
                  <div className="space-y-9 mt-8 ">
                    <BlockMath math="IF = \dfrac{20{.}000{.}000 - 4{.}000{.}000}{200{.}000 + 6{.}000C} \div 1{.}000 " />

                    <BlockMath math="IF = \dfrac{20{.}000 - 4{.}000}{200 + 6C}" />
                  </div>
                </section>

                <p>
                  Se calcula las capacitaciones:
                  <br />
                  <div className="space-y-9 mt-6 ">
                    <BlockMath math="IF = \dfrac{20{.}000 - 4{.}000 (3)}{200 + 6C (3)}" />
                    <BlockMath math="IF = \dfrac{20{.}000 - 12{.}000}{200 + 18C}" />
                    <BlockMath math="IF = \dfrac{8{.}000}{218} = 36.69" />
                    <BlockMath math="IF = 36.69" />
                  </div>
                </p>

                <p className="my-8 ">
                  <strong>Conclusión:</strong>
                  <br />
                  <p className="mt-4">
                    Con 6 capacitaciones, el índice de frecuencia es
                    aproximadamente{" "}
                    <span className="font-bold text-orange-600">36.69</span>.
                  </p>
                </p>
              </div>
            </section>
          </article>

          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <header>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-slate-900">
                <Clock className="mr-2 h-5 w-5 text-red-600" />
                Índice de Severidad
              </h3>
            </header>

            <section className="space-y-4 text-sm text-slate-700">
              <div className="space-y-2">
                <p className="text-slate-600 font-medium">
                  2. Una empresa desea calcular el índice de severidad, teniendo
                  en cuenta que tienen dos turnos de trabajo, turno diurno TD y
                  TN.
                </p>

                <p>
                  <strong>Datos:</strong>
                  <br />
                  ✓ D = TD + TN
                  <br />
                  ✓ En el turno nocturno se pierde 15 días más que el turno
                  diurno. TN = TD + 15
                  <br />✓ H: horas hombres trabajadas 80.000
                </p>

                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-semibold text-red-800 mb-2">Fórmula:</p>
                  <BlockMath math="IS = \dfrac{D \times 1{.}000{.}000}{H}" />
                </div>

                <p>
                  <strong> Sustituir ecuación (2) en ecuación (1):</strong>
                </p>
                <div className="space-y-9 mt-6 ">
                  <BlockMath math="D = TD + TN" />
                  <BlockMath math="D = TD + (TD + 15) = 2TD + 15" />
                  <BlockMath math="D = 2TD + 15" />
                </div>
                <strong> Sustituir D en la formula del IS:</strong>
                <div className="space-y-9 mt-6 ">
                  <BlockMath math="IS = \dfrac{(2TD + 15) \times 1{.}000{.}000}{80{.}000}" />
                </div>

                <p className="mt-7">
                  Se supone que en el turno diurno se perdieron 20 días por
                  accidente es decir TD = 20 <br />
                  <strong>Sustituir D:</strong>
                </p>
                <div className="space-y-9 mt-6 ">
                  <BlockMath math="D = 2(20) + 15" />
                  <BlockMath math="D = 40 + 15 = 55" />
                  <BlockMath math="D = 55" />
                </div>
                <p>Calcular el índice de severidad:</p>
                <div className="space-y-9 mt-6 ">
                  <BlockMath math="IS = \dfrac{55 \times 1{.}000{.}000}{80{.}000}" />
                  <BlockMath math="IS = \dfrac{55{.}000{.}000}{80{.}000} = 687.5" />
                  <BlockMath math="IS = 687.5" />
                </div>

                <p className="">
                  <strong>Conclusión:</strong>
                  <br />
                  <p className="mt-4">
                    Si en el turno diurno se pierden 20 días, el índice de
                    severidad IS{" "}
                    <span className="font-bold text-red-600">687.5</span>.
                  </p>
                </p>
              </div>
            </section>
          </article>
          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <header>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-slate-900">
                <Building2 className="mr-2 h-5 w-5 text-green-600" />
                Análisis por Jornadas
              </h3>
            </header>

            <section className="space-y-4 text-sm text-slate-700">
              <div className="space-y-2">
                <p className="text-slate-600 font-medium">
                  3. En una empresa se registran accidentes durante dos tipos de
                  jornada:
                </p>
                <p>
                  ✓ Jornada diurna (D)
                  <br />✓ Jornada nocturna (N)
                </p>
                <p>
                  <strong>Datos:</strong>
                  <br />
                  ✓ Numero total de accidentes 44. D + N = 44
                  <br />
                  ✓El número de accidentes en jornada diurna fue igual al triple
                  de los accidentes en jornada nocturna menos 8. D = 3N – 8
                </p>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-800 mb-2">
                    Sistema de ecuaciones:
                  </p>
                  <BlockMath math="D + N = 44" />
                  <BlockMath math="D = 3N - 8" />
                </div>

                <p>
                  <strong>Despejemos D en ambas ecuaciones:</strong>
                </p>
                <BlockMath math="D = 44 - N" />
                <BlockMath math="D = 3N - 8" />

                <p>
                  <strong>Resolver la ecuación:</strong>
                </p>
                <BlockMath math="44 + 8 = 3N + N" />
                <BlockMath math="52 = 4N" />
                <BlockMath math="N = \dfrac{52}{4}" />
                <BlockMath math="N = 13" />

                <p>
                  <strong>
                    Se sustituye en una de las ecuaciones para encontrar D:
                  </strong>
                </p>

                <BlockMath math="D = 44 - N" />
                <BlockMath math="D = 44 - 13" />
                <BlockMath math="D = 31" />

                <p className="mt-6">
                  <strong>Conclusión:</strong>
                  <br />
                  Jornada diurna (D):{" "}
                  <span className="font-bold text-green-600">31</span>{" "}
                  accidentes · Jornada nocturna (N):{" "}
                  <span className="font-bold text-green-600">13</span>{" "}
                  accidentes.
                </p>
              </div>
            </section>
          </article>

          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <header>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-slate-900">
                <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                Índice de Incidencia
              </h3>
            </header>

            <section className="space-y-4 text-sm text-slate-700">
              <div className="space-y-2">
                <p className="text-slate-600 font-medium">
                  4. Una empresa tiene dos plantas de producción y se desea
                  calcular el índice de incidencia de accidentes en total.
                </p>

                <p>
                  <strong>Datos:</strong>
                  <br />
                  ✓ N: es el numero de accidentes con incapacidad 60. A + B = 60{" "}
                  <br />
                  ✓ El numero de accidentes en la planta A fue igual al triple
                  del numero de accidentes en planta B – 8. A = 3B – 8<br />✓ H:
                  horas hombres trabajadas 140.000
                </p>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-blue-800 mb-2">Fórmula:</p>
                  <BlockMath math="II = \dfrac{N \times 200{.}000}{H}" />
                </div>

                <p>
                  <strong> Despejar A en ambas ecuaciones:</strong>
                </p>
                <p>
                  <strong> Primera ecuación: </strong>
                </p>
                <BlockMath math="A + B = 60" />
                <BlockMath math="A = 60 - B" />

                <p>
                  <strong> Segunda ecuación: </strong>
                </p>

                <BlockMath math="A = 3B - 8" />

                <p>
                  <strong> Igualamos ambas expresiones: </strong>
                </p>

                <BlockMath math="60 - B = 3B - 8" />

                <p>
                  <strong> Ahora se resuelve : </strong>
                </p>

                <BlockMath math="60 + 8 = 3B + B" />
                <BlockMath math="68 = 4B" />
                <BlockMath math="B = \dfrac{68}{4}" />
                <BlockMath math="B = 17" />

                <p>
                  <strong>Ahora sustituimos para hallar A: </strong>
                </p>
                <BlockMath math="A + B = 60" />
                <BlockMath math="A = 60 - B" />
                <BlockMath math="A = 60 - 17" />
                <BlockMath math="A = 43" />

                <p>
                  <strong>Total, de accidentes con incapacidad: </strong>
                </p>

                <BlockMath math="N = A + B" />
                <BlockMath math="N = 43 + 17" />
                <BlockMath math="N = 60" />

                <p>
                  <strong>Calcular el índice de incidencia total:</strong>
                </p>
                <BlockMath math="II = \dfrac{60 \times 200{.}000}{140{.}000} = 85.71" />

                <p className="mt-6">
                  <strong>Conclusión:</strong>
                  <br />
                  Planta A: <span className="font-bold text-blue-600">
                    43
                  </span>{" "}
                  accidentes · Planta B:{" "}
                  <span className="font-bold text-blue-600">17</span> accidentes
                  · II total:{" "}
                  <span className="font-bold text-blue-600">85.71</span>
                </p>
              </div>
            </section>
          </article>

          <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <header>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-slate-900">
                <CalendarRange className="mr-2 h-5 w-5 text-purple-600" />
                Análisis por Trimestres
              </h3>
            </header>

            <section className="space-y-4 text-sm text-slate-700">
              <div className="space-y-2">
                <p className="text-slate-600 font-medium">
                  5. Una empresa de transporte analiza los accidentes laborales
                  del primer y segundo trimestre del año.
                </p>

                <p>
                  <strong>Datos:</strong>
                  <br />
                  ✓ La suma del primer trimestre (T1) y el segundo trimestre
                  (T2) fue de 46 accidentes. T1 + T2 = 46 <br />
                  ✓ En el segundo trimestre hubo 6 accidentes más que en el
                  primero. <br />
                  T2 – T1 = 6
                </p>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-800 mb-2">
                    Sistema de ecuaciones:
                  </p>
                  <BlockMath math="T1 + T2 = 46" />
                  <BlockMath math="T2 - T1 = 6" />
                </div>

                <p>
                  <strong>Reordenar la segunda ecuación:</strong>
                </p>
                <BlockMath math="T2 - T1 = 46 \Rightarrow -T1 + T2 = 6" />
                <p>
                  <strong>Las ecuaciones quedan así:</strong>
                </p>
                <BlockMath math="T1 + T2y - T1 + T2 " />

                <p>
                  <strong>Se suman ambas ecuaciones para eliminar T1:</strong>
                </p>
                <BlockMath math="(T1 + T2) + (-T1 + T2) = 46 + 6" />
                <BlockMath math="2T2 = 52" />
                <BlockMath math="T2 = \dfrac {52}{2}" />
                <BlockMath math="T2 = 26" />

                <p>
                  <strong>Sustituimos T2 = 26 en la primera ecuación:</strong>
                </p>
                <BlockMath math="T1 + 26 = 46 " />
                <BlockMath math="T1 = 46 - 26 " />
                <BlockMath math="T1 = 20 " />

                <p className="mt-6">
                  <strong>Conclusión:</strong>
                  <br />
                  Accidentes en el primer trimestre (T1):{" "}
                  <span className="font-bold text-purple-600">20</span>
                  <br /> Accidentes en el segundo trimestre (T2):{" "}
                  <span className="font-bold text-purple-600">26</span>
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Ejemplos;
