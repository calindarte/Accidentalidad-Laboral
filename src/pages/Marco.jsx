import { CheckCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Marco = () => {
  return (
    <section
      id="marco"
      className="bg-gradient-to-r py-20 md:py-28 px-12 md:px-32 from-slate-50 to-orange-50 rounded-2xl"
    >
      <motion.h2
        {...fadeUp}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-slate-800 flex items-center mb-8"
      >
        <FileText className="mr-2 h-6 w-6 text-orange-600" />
        Marco Normativo Colombiano
      </motion.h2>

      <motion.p
        {...fadeUp}
        viewport={{ once: true }}
        className="text-gray-700 text-justify leading-relaxed mb-12"
      >
        En Colombia, el tratamiento de la accidentalidad laboral se encuentra
        regulado por un conjunto de normas que establecen las obligaciones de
        empleadores, trabajadores, administradoras de riesgos laborales (ARL) y
        el Estado para garantizar ambientes de trabajo seguros y saludables.
        Este marco legal tiene como objetivo la prevención de accidentes y
        enfermedades laborales, así como el adecuado registro, notificación y
        gestión de los eventos que ocurren.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Tarjetas columna 1 */}
        {[
          {
            ley: "Ley 1562/2012",
            color: "orange",
            puntos: [
              "Modifica el sistema general de riesgos laborales.",
              "Reafirma la responsabilidad del empleador en la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).",
              "Define el accidente de trabajo como “todo suceso repentino que sobrevenga por causa o con ocasión del trabajo...”",
            ],
          },
          {
            ley: "Decreto 1072/2015",
            color: "green",
            puntos: [
              "Compila todas las normas del sector trabajo.",
              "Establece el SG-SST como obligatorio para todas las empresas.",
              "Define el procedimiento para el reporte e investigación de accidentes de trabajo y enfermedades laborales.",
            ],
          },
          {
            ley: "Resolución 0312/2019",
            color: "blue",
            puntos: [
              "Define los estándares mínimos del SG-SST que toda empresa debe cumplir.",
              "Incluye obligaciones sobre registro y análisis de accidentalidad.",
            ],
          },
        ].map(({ ley, color, puntos }, idx) => (
          <motion.div
            key={ley}
            {...fadeUp}
            viewport={{ once: true }}
            className={`flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm`}
          >
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded bg-${color}-100 text-${color}-800`}
            >
              {ley}
            </span>
            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              {puntos.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 text-${color}-500 mt-[2px] flex-shrink-0`} />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Tarjetas columna 2 */}
        {[
          {
            ley: "Decreto 1295/1994",
            color: "purple",
            puntos: [
              "Regula la organización y administración del Sistema General de Riesgos Laborales.",
              "Establece las funciones de las ARL y define claramente el proceso de calificación, atención y reporte de accidentes de trabajo.",
            ],
          },
          {
            ley: "Resolución 1401/2007",
            color: "yellow",
            puntos: [
              "Reglamenta la investigación de incidentes y accidentes de trabajo.",
              "Obliga al empleador a conformar un equipo investigador y a generar recomendaciones preventivas.",
            ],
          },
          {
            ley: "Otras disposiciones relevantes",
            color: "pink",
            puntos: [
              "Ley 100 de 1993: Crea el Sistema de Seguridad Social Integral.",
              "Resolución 2646 de 2008: Relacionada con riesgos psicosociales, que pueden derivar en accidentes.",
              "Circular 070 de 2020 (Ministerio del Trabajo): Lineamientos sobre notificación de accidentes graves o mortales.",
            ],
          },
        ].map(({ ley, color, puntos }, idx) => (
          <motion.div
            key={ley}
            {...fadeUp}
            viewport={{ once: true }}
            className={`flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm`}
          >
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded bg-${color}-100 text-${color}-800`}
            >
              {ley}
            </span>
            <ul className="text-sm text-slate-700 space-y-3 pl-1">
              {puntos.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 text-${color}-800 mt-[2px] flex-shrink-0`} />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Importancia */}
      <motion.div
        {...fadeUp}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-3 bg-white rounded-lg p-6 shadow-sm"
      >
        <span className="inline-block px-3 py-1 text-lg font-semibold rounded bg-gray-100 text-gray-800">
          ★ Importancia del marco normativo
        </span>
        <span>El cumplimiento de este marco normativo:</span>
        <ul className="text-sm text-slate-700 space-y-3 pl-1">
          {[
            "Protege la vida y salud de los trabajadores.",
            "Reduce la ocurrencia de accidentes laborales.",
            "Asegura la trazabilidad y seguimiento de los eventos.",
            "Evita sanciones legales a las empresas.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gray-800 mt-[2px] flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Marco;
