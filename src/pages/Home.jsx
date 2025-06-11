import { useEffect, useState } from "react";
import {Shield} from "lucide-react";
import HeroSection from "../components/HeroSection";
import Conceptos from "./Conceptos";
import Ecuaciones from "./Ecuaciones";
import Ejemplos from "./Ejemplos";
import Autores from "./Autores";
import Header from "../components/Header";
import Marco from "./Marco";
import Metodos from "./Metodos";
import Videos from "./Videos";

const Home = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "inicio", offset: 0 },
        { id: "definicion" },
        { id: "marco" },
        { id: "ecuaciones" },
        { id: "metodos" },
        { id: "ejemplos" },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <Header scrollToSection={scrollToSection} activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Conceptos Básicos */}
      <Conceptos />
      {/* Marco Normativo */}
      <Marco/>

      {/* Ecuaciones de Primer Grado */}
      <Ecuaciones />
      <Metodos/>
      {/* Ejemplos Prácticos */}
      <Ejemplos />
      <Videos/>

      {/* Autores */}
      <Autores />
    </div>
  );
};

export default Home;
