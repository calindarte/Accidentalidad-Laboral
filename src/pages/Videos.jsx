import { motion } from "framer-motion";

const Videos = () => {

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};
  return (
    <section id="videos" className="py-20 md:py-28 px-12 md:px-32 bg-gradient-to-br from-gray-50 via-white to-zinc-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Videos de Solución de Ejercicios
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Autor 1 */}
          <motion.article
            {...fadeUp}
          >
            <iframe
              className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition-shadow"
              src="https://www.youtube.com/embed/Hol92w-aGlE"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.article>

          {/* Autor 2 */}
          <motion.article
            {...fadeUp}
          >
            <iframe
              className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition-shadow"
              src="https://www.youtube.com/embed/LuAFZLH1Mto"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.article>

          {/* Autor 3 */}
          <motion.article
            {...fadeUp}
          >
            <iframe
              className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition-shadow"
              src="https://www.youtube.com/embed/YoxRcC2rdGM"
              title="Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.article>

          {/* Autor 4 */}
          <motion.article
            {...fadeUp}
          >
            <iframe
              className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition-shadow"
              src="https://www.youtube.com/embed/rkvDm7NpIdY"
              title="Video 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.article>
          {/* Autor 5*/}
          <motion.article
            {...fadeUp}
          >
            <iframe
              className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition-shadow"
              src="https://www.youtube.com/embed/Uae7b8CdBYY"
              title="Video 5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Videos;
