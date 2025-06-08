import { useState } from "react";

const Metodos = () => {
     const [tab, setTab] = useState("sustitucion");

  return (
    <section id="metodos" className=" px-12 md:px-32">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-slate-800 flex items-center mb-12">
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
            El método de sustitución, para resolver un sistema de dos ecuaciones
            con dos incógnitas, consiste en despejar una incógnita en una de las
            ecuaciones y sustituirla en la otra; así, se obtiene una sola
            ecuación con una incógnita. Una vez obtenido el valor de esta
            incógnita, se sustituye su valor en cualquiera de las ecuaciones del
            sistema inicial para calcular el valor de la otra incógnita.
          </p>

          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold mb-4 text-slate-800">
              Ejemplo: Se analiza el efecto de los turnos diurnos y nocturnos en
              los accidentes.
            </h4>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-orange-600">Datos:</span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>D: accidentes diurnos</li>
                <li>N: accidentes nocturnos</li>
                <li>Total de accidentes por semana: D + N = 20</li>
                <li>
                  Se sabe que el turno nocturno tiene 6 accidentes más que el
                  turno diurno: N = D + 6
                </li>
              </ul>

              <p className="mt-4 font-semibold text-orange-600">Ecuaciones:</p>
              <p>D + N = 20</p>
              <p>N = D + 6</p>

              <p className="mt-4 font-semibold">
                Se sustituye N en la primera ecuación
              </p>
              <p>D + (D + 6) = 20</p>
              <p>2D + 6 = 20</p>
              <p>2D = 20 - 6</p>
              <p>2D = 14</p>
              <p>D = 14 / 2</p>
              <p>D = 7</p>

              <p className="mt-4 font-semibold ">
                Se sustituye D en la segunda ecuación
              </p>
              <p>N = D + 6</p>
              <p>N = 7 + 6 = 13</p>
              <p>N = 13</p>

              <p className="mt-4 font-semibold text-green-700">Conclusión:</p>
              <p>
                Accidentes diurnos: <strong>7</strong>
              </p>
              <p>
                Accidentes nocturnos: <strong>13</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {tab === "eliminacion" && (
        <div className="bg-white rounded-xl shadow p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">
            Método de Reducción o Eliminación
          </h3>
          <p className="text-slate-600 mb-4 text-justify">
            El método de reducción o método de eliminación, en ecuaciones de
            primer grado consiste en sumar o restar dos ecuaciones de un sistema
            para eliminar una de las incógnitas, lo que permite resolver el
            sistema paso a paso, consiste en lo siguiente:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 mb-6 pl-4">
            <li>
              Se restan las dos ecuaciones resultantes, con lo que se elimina
              una incógnita.
            </li>
            <li>
              Se resuelve la ecuación con una incógnita obtenida, y se sustituye
              su valor en cualquiera de las ecuaciones iniciales para calcular
              la segunda.
            </li>
          </ul>

          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold mb-4 text-slate-800">
              Ejemplo: Se supone que en una empresa se analizan accidentes en
              dos áreas distintas: A y B.
            </h4>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-orange-600">Datos:</span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>A + B = 40 (hay 40 accidentes en total)</li>
                <li>
                  2A - B = 20 (el doble de los accidentes en A menos los de B da
                  20)
                </li>
              </ul>

              <p className="mt-4 font-semibold text-orange-600">Ecuaciones:</p>
              <p>A + B = 40</p>
              <p>2A - B = 20</p>

              <p className="mt-4 font-semibold">Se suman ambas ecuaciones:</p>
              <p>(A + B) + (2A - B) = 40 + 20</p>
              <p>(A + 2A) + (B - B) = 60</p>
              <p>3A = 60</p>

              <p className="mt-4 font-semibold">
                Entonces se resuelve la ecuación resultante:{" "}
              </p>
              <p>3A = 60</p>
              <p>A = 60 / 3</p>
              <p>A = 20</p>

              <p className="mt-4 font-semibold">
                Ahora se pasa a sustituir en una ecuación original:
              </p>
              <p>A + B = 40</p>
              <p>20 + B = 40</p>
              <p>B = 40 - 20</p>
              <p>B = 20</p>

              <p className="mt-4 font-semibold text-green-700">Conclusión:</p>
              <p>
                Accidentes en el área A: <strong>20</strong>
              </p>
              <p>
                Accidentes en el área B: <strong>20</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {tab === "igualacion" && (
        <div className="bg-white rounded-xl shadow p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Método de Igualación</h3>
          <p className="text-slate-600 mb-4 text-justify">
            El método de igualación en ecuaciones de primer grado consiste en
            despejar la misma variable en ambas ecuaciones de un sistema y luego
            igualar esas expresiones para encontrar el valor de una incógnita.
            Después, ese valor se sustituye en una de las ecuaciones para
            obtener la otra variable.
          </p>

          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold mb-4 text-slate-800">
              Ejemplo: En una empresa se analiza la cantidad de accidentes
              ocurridos en dos de sus departamentos.
            </h4>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-orange-600">Datos:</span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  La suma de los accidentes de los dos departamentos da 26: A +
                  B = 26
                </li>
                <li>
                  Los accidentes en el primer departamento superan en 8 a los
                  del segundo: A = B + 8
                </li>
              </ul>

              <p className="mt-4 font-semibold text-orange-600">Ecuaciones:</p>
              <p>A + B = 26</p>
              <p>A = B + 8</p>

              <p className="mt-4 font-semibold">
                Se despeja A en la primera ecuación:
              </p>
              <p>A = 26 - B</p>

              <p className="mt-4 font-semibold">Se igualan las expresiones:</p>
              <p>B + 8 = 26 - B</p>

              <p className="mt-4 font-semibold">Resolviendo la ecuación:</p>
              <p>B + B = 26 - 8</p>
              <p>2B = 18</p>
              <p>B = 18 / 2</p>
              <p>B = 9</p>

              <p className="mt-4 font-semibold">
                Sustituimos B en la segunda ecuación:
              </p>
              <p>A = B + 8</p>
              <p>A = 9 + 8</p>
              <p>A = 17</p>

              <p className="mt-4 font-semibold text-green-700">Conclusión:</p>
              <p>
                Accidentes en el primer departamento: <strong>17</strong>
              </p>
              <p>
                Accidentes en el segundo departamento: <strong>9</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Metodos;
