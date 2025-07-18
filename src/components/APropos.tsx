import profile from "../assets/ali.jpg";
export default function APropos() {
  return (
    <>
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-semibold mb-4">À propos</h2>
        <div
          className="
  flex flex-row justify-evenly items-center gap-10 px-20 
  sm:flex-col sm:gap-2 sm:px-2 
  md:flex-col md:gap-2 md:px-2
  flex-wrap
"
        >
          <div>
            <p>
              Je suis un ingénieur en informatique passionné par le
              développement web. J’aime construire des interfaces modernes avec
              React et Tailwind, tout en assurant une logique backend robuste
              avec Node.js et Express. Je travaille avec des outils comme
              TypeScript, PostgreSQL, et j’accorde une grande importance à la
              qualité du code et à l’expérience utilisateur. Toujours en quête
              de nouveaux défis, je développe régulièrement des projets
              personnels pour explorer de nouvelles technologies. Je suis
              curieux, rigoureux, et motivé par l’idée de transformer une idée
              en application concrète.
            </p>
          </div>
          <div>
            <img
              src={profile}
              alt="ali"
              className="w-[1000px] hover-flip-keep object-cover rounded-full border-3 border-blue-950 shadow-blue-800 shadow-2xl "
            />
          </div>
        </div>
      </div>
    </>
  );
}
