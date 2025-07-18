import Projet from "./Projet";
import projectData from "../data/projectData";
export default function Projets() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Projets</h2>
        <p className="mb-8 text-gray-700">
          Voici quelques-uns de mes projets récents. Chacun d'eux reflète ma
          passion pour le développement web et mon engagement envers la qualité
          du code et l'expérience utilisateur.
        </p>
        {/* Liste des projets ici */}
        {projectData.map((projet,index)=>(
            <Projet
                key={index}
                nom={projet.nom}
                image={projet.image}
                description={projet.description}
                technologies={projet.technologies}
                lien={projet.lien}
            />
        ))}
        
      </div>
    </>
  );
}
