import profile from "../assets/ali.jpg";

export default function APropos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-8">À propos</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center items-start gap-8">
        {/* Texte */}
        <div className="w-full md:w-2/3  flex md:justify-center md:items-end">
          <p className="text-gray-800 leading-relaxed">
            Je suis ingénieur en informatique passionné par le développement
            web. J’aime construire des interfaces modernes avec React et
            Tailwind, tout en assurant une logique backend robuste avec Node.js
            et Express. Je travaille avec des outils comme TypeScript,
            PostgreSQL, et j’accorde une grande importance à la qualité du code
            et à l’expérience utilisateur. Toujours en quête de nouveaux défis,
            je développe régulièrement des projets personnels pour explorer de
            nouvelles technologies. Je suis curieux, rigoureux, et motivé par
            l’idée de transformer une idée en application concrète.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-center md:items-start  ">
          <img
            src={profile}
            alt="ali"
            className="w-48 md:w-52 rounded-full border-4 border-blue-950 shadow-xl shadow-blue-900 transition-transform duration-500 hover-flip-keep"
          />
        </div>
      </div>
    </div>
  );
}
