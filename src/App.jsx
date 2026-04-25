import { motion } from "framer-motion";
import { ArrowRight, Scissors, MapPin } from "lucide-react";
import barberImg from "./img/barber_inicio.jpg";
import Counter from "./Counter";

const services = [
  { title: "Corte", desc: "Precisión y estilo moderno." },
  { title: "Barba", desc: "Perfilado y terminación premium." },
  { title: "Corte + Barba", desc: "Experiencia completa Clase A." },
];

const gallery = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b",
];

export default function App() {
  return (
    <main className="bg-black text-white">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-black/45 backdrop-blur-md border-b border-white/10">
        <div className="text-white font-black tracking-widest border border-white px-4 py-2">
          CLASE A
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#galeria" className="hover:text-white transition">Galería</a>
          <a href="#turnos" className="hover:text-white transition">Turnos</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={barberImg}
            alt="Interior de barbería"
            className="w-full h-full object-cover scale-110 animate-[zoom_20s_linear_infinite]"
          />
        </div>

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 px-6 md:px-16 max-w-5xl pt-24"
        >
          <span className="text-xs tracking-[0.45em] text-gray-400">
            BARBERÍA PREMIUM
          </span>

          <h1 className="mt-6 text-5xl md:text-8xl font-black leading-[0.88] uppercase tracking-tight">
            No es solo un
            <br />
            corte.
            <br />
            Es presencia.
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed">
            Cortes, barba y detalles pensados para elevar tu imagen.
            Bienvenido a <strong className="text-white">Clase A</strong>.
          </p>

          <div className="flex gap-4 mt-9 flex-wrap">
            <a
              href="#turnos"
              className="inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Reservar turno <ArrowRight size={18} />
            </a>

            <a
              href="#galeria"
              className="inline-flex items-center px-7 py-4 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              Ver trabajos
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 flex-wrap">
            <div className="flex -space-x-3">
              {["F", "M", "J", "L", "A"].map((x) => (
                <div
                  key={x}
                  className="w-10 h-10 rounded-full border-2 border-black bg-white text-black grid place-items-center font-bold"
                >
                  {x}
                </div>
              ))}
            </div>

            <div className="h-10 w-px bg-white/25" />

            <div>
              <div className="text-lg tracking-widest text-white">★★★★★</div>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <MapPin size={15} />
                +500 clientes satisfechos en Google Maps
              </p>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs tracking-[0.5em] text-white/60">
          SCROLL
        </div>
      </section>

      {/* NÚMEROS DESTACADOS */}
      <section className="relative py-28 px-6 md:px-16 bg-[#050505] overflow-hidden">

        {/* fondo glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative z-10 grid md:grid-cols-3 gap-10 text-center">

          <div className="group p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition">

            <h3 className="text-6xl font-black tracking-tight">
              <Counter end={500} />
            </h3>

            <p className="text-gray-400 mt-3 uppercase text-sm tracking-widest">
              Clientes satisfechos
            </p>

            <div className="mt-6 h-px w-full bg-white/10" />

            <p className="text-white/60 text-sm mt-4">
              Confianza construida con cada corte.
            </p>
          </div>

          <div className="group p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition">

            <h3 className="text-6xl font-black tracking-tight">
              <Counter end={5} />
            </h3>

            <p className="text-gray-400 mt-3 uppercase text-sm tracking-widest">
              Años de experiencia
            </p>

            <div className="mt-6 h-px w-full bg-white/10" />

            <p className="text-white/60 text-sm mt-4">
              Perfeccionando técnica día a día.
            </p>
          </div>

          <div className="group p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition">

            <h3 className="text-6xl font-black tracking-tight">
              <Counter end={1200} />
            </h3>

            <p className="text-gray-400 mt-3 uppercase text-sm tracking-widest">
              Cortes realizados
            </p>

            <div className="mt-6 h-px w-full bg-white/10" />

            <p className="text-white/60 text-sm mt-4">
              Experiencia real en cada detalle.
            </p>
          </div>

        </div>
      </section>

      {/* RESEÑAS */}
<section className="relative overflow-hidden py-28 px-6 md:px-16 bg-neutral-950">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_30%)]" />

  <div className="relative z-10 mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
    <div>
      <span className="text-xs tracking-[0.45em] text-gray-500 uppercase">
        Reseñas
      </span>

      <h2 className="mt-5 text-4xl md:text-6xl font-black uppercase leading-tight">
        Lo que dicen
        <br />
        nuestros clientes.
      </h2>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
      <div className="text-2xl tracking-widest text-white">★★★★★</div>
      <p className="text-sm text-gray-400 mt-1">Valoración en Google Maps</p>
    </div>
  </div>

  <div className="relative z-10 grid md:grid-cols-3 gap-6">
    {[
      {
        name: "Facundo M.",
        text: "Excelente atención, lugar impecable y el corte quedó tal cual lo pedí.",
      },
      {
        name: "Juan P.",
        text: "Muy prolijo, buena onda y se nota el detalle en cada terminación.",
      },
      {
        name: "Lucas R.",
        text: "De las mejores barberías. Ambiente premium y laburo muy fino.",
      },
    ].map((review, i) => (
      <motion.div
        key={review.name}
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.6 }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 hover:-translate-y-2 hover:border-white/25 transition duration-300"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="mb-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-white text-black grid place-items-center font-black">
            {review.name[0]}
          </div>

          <div>
            <h3 className="font-bold">{review.name}</h3>
            <div className="text-sm tracking-widest text-white">★★★★★</div>
          </div>
        </div>

        <p className="text-gray-400 leading-relaxed">“{review.text}”</p>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/35">
          Google Maps
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="relative overflow-hidden py-28 px-6 md:px-16 bg-[#050505]"
      >
        {/* fondo con textura/luz */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-3 text-xs tracking-[0.45em] text-white/45 font-semibold uppercase">
                <span className="h-px w-12 bg-white/30" />
                Servicios
              </span>

              <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-tight uppercase">
                Lo que
                <br />
                hacemos.
              </h2>
            </div>

            <p className="max-w-md text-gray-400 leading-relaxed">
              Técnica, detalle y terminación. Cada servicio está pensado para que
              salgas con una imagen más fuerte.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.65 }}
                className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 p-8 hover:-translate-y-3 transition duration-500"
              >
                {/* brillo superior */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

                {/* fondo dinámico */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* número */}
                <span className="absolute right-7 top-6 text-7xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition">
                  0{i + 1}
                </span>

                <motion.div
                  animate={{ rotate: [0, -18, 18, -8, 8, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 mb-14 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] group-hover:bg-white group-hover:text-black transition duration-300"
                >
                  <Scissors size={32} strokeWidth={1.8} />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base">
                    {s.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-10 h-px w-full bg-white/10" />

                <div className="relative z-10 mt-6 flex items-center justify-between text-sm text-white/50 group-hover:text-white transition">
                  <span>Detalle premium</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 px-6 md:px-16 bg-black">
        <div className="mb-14">
          <span className="text-xs tracking-widest text-gray-500">GALERÍA</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Trabajos reales.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="h-80 rounded-2xl overflow-hidden"
            >
              <img
                src={`${img}?q=80&w=900`}
                alt="Trabajo Clase A"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CURSOS */}
      <section
        id="cursos"
        className="relative overflow-hidden py-28 px-6 md:px-16 bg-black"
      >
        {/* fondo sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.4em] text-gray-500">
              FORMACIÓN
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-black uppercase leading-tight">
              Aprendé barbería
              <br />
              en Clase A.
            </h2>

            <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
              Formación profesional para llevar tu nivel al siguiente punto.
              Técnica, práctica real y mentalidad de barber premium.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300">
              <li>• Técnicas modernas de corte</li>
              <li>• Perfilado y navaja</li>
              <li>• Fade y estilos actuales</li>
              <li>• Atención al cliente</li>
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-white text-black px-7 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Inscribirme <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* CARD VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* badge */}
              <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-sm font-bold">
                Curso activo
              </div>

              {/* texto sobre imagen */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold">
                  Curso Inicial de Barbería
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Cupos limitados · Inicio próximo
                </p>
              </div>
            </div>

            {/* glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
          </motion.div>
        </div>
      </section>

      {/* TURNOS */}
      <section id="turnos" className="py-28 px-6 text-center bg-neutral-900">
        <span className="text-xs tracking-widest text-gray-500">RESERVAS</span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold mb-6">
          Tu próximo corte puede ser Clase A.
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Reservá tu turno y viví la experiencia completa.
        </p>

        <a
          href="https://google.com"
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          Sacar turno <ArrowRight size={18} />
        </a>
      </section>

      <footer className="px-6 py-8 border-t border-neutral-800 flex justify-between text-sm text-gray-500">
        <span>CLASE A</span>
        <span>Barbería premium</span>
      </footer>
    </main>
  );
}