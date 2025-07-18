import Langage from "./Langage";
import competenceData from "../data/competenceData";

export default function Competences() {
  return (
    <section className="py-10 bg-gray-100" >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-start">Compétences</h2>
        <p className="mb-8 text-gray-700">
          Voici quelques-unes des technologies et langages que je maîtrise. Je
          suis toujours en train d'apprendre et d'explorer de nouvelles
          compétences pour rester à jour dans le domaine du développement web.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {competenceData.map((skill, index) => (
            <Langage key={index} name={skill.nom} logo={skill.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
