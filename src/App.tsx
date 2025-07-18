import APropos from "./components/APropos";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projets from "./components/Projets";
import "./index.css";
import Competences from "./components/Competence";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <section
          id="hero"
          className="h-screen bg-gray-100 flex flex-col items-center justify-center backGroundHero p-5"
        >
          <h1 className="text-8xl font-bold text-shadow-white">
            Salut, moi c’est Abdelali
          </h1>
          <p className="text-2xl mt-4">
            Développeur web passionné — bienvenue sur mon portfolio
          </p>
        </section>

        <section id="about" className="py-20 bg-white">
          <APropos />
        </section>
        <section id="competences">
        <Competences />
        </section>
        <section id="projects" className="py-20 bg-gray-50">
          <Projets />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
