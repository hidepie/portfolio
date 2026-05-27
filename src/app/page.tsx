import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div style={{ height: "1px", background: "#e5e7eb" }} />
        <ProjectsGrid />
        <About />
        <Footer />
      </main>
    </>
  );
}
