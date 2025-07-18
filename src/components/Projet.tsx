interface ProjetProps {
  nom: string;
  image: string;
  description: string;
  technologies: string[];
  lien: string;
}

export default function Projet({
  nom,
  image,
  description,
  technologies,
  lien,
}: ProjetProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-center">{nom}</h3>
      <img
        src={image}
        alt={nom}
        className="mb-4 rounded-md border-10 border-blue-400
        w-full h-auto object-contain"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={lien}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Voir le projet
      </a>
    </div>
  );
}
