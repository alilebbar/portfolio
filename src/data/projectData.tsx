import portfolioImage from "../assets/projetImages/portfolio.png";
import adanImage from "../assets/projetImages/adan.png";
import backBookImage from "../assets/projetImages/backbook.png";
import todoImage from "../assets/projetImages/todo.png";
import meteoImage from "../assets/projetImages/meteo.png";
import XOImage from "../assets/projetImages/XO.png";

const projectData = [
  {
    nom: "Portfolio Personnel",
    image: portfolioImage,
    description:
      "Un portfolio interactif pour présenter mes compétences et projets.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    lien: "#",
  },
  {
    nom: "Adan – Application des horaires de prière",
    image: adanImage,
    description:
      "Une application web simple et réactive qui affiche les horaires de prière en temps réel selon la localisation de l'utilisateur. Les données sont récupérées via une API gratuite, assurant des heures précises et à jour. Ce projet reflète ma capacité à consommer des APIs, à gérer l'affichage dynamique avec vanilla JavaScript et à créer une interface utilisateur intuitive.",

    technologies: ["JavaScript", "HTML", "CSS"],
    lien: "https://5priere.netlify.app/",
  },
  {
    nom: "BackBook – Interface Frontend d’un réseau social",
    image: backBookImage,
    description: `BackBook est une maquette frontend d’un réseau social moderne. J’y ai conçu une interface intuitive permettant aux utilisateurs de :

                 publier des posts avec image et description,

                 voir les publications d’autres utilisateurs,

                 naviguer entre les sections Home et Profile,

                 se connecter / se déconnecter avec une UI fluide.`,
    technologies: ["JavaScript", "HTML", "CSS", "bootstrap"],
    lien: "https://backbook.netlify.app/",
  },
  {
    nom: "Todo App",
    image: todoImage,
    description:
      "Une application de gestion de tâches simple et efficace, permettant aux utilisateurs de créer, modifier et supprimer des tâches.",
    technologies: ["React", "Redux", "Material-UI"],
    lien: "https://todoobjectif.netlify.app/",
  },
  {
    nom: "WeatherApp – Application météo du jour",
    image: meteoImage,
    description: `WeatherApp est une application simple qui affiche la météo actuelle d’une ville donnée en utilisant une API météo gratuite. Elle permet aux utilisateurs de :

                  rechercher une ville,

                  consulter la température, l’état du ciel (ensoleillé, nuageux, etc.),

                  voir l’humidité et la vitesse du vent en temps réel.`,
    technologies: ["JavaScript", "HTML", "CSS","bootstrap"],
    lien: "https://weatherapp-abdelali.netlify.app/",
  },
  {
    nom: "XO Game – Jeu de morpion",
    image: XOImage,
    description: `XO Game est un jeu de morpion classique où deux joueurs s'affrontent pour aligner trois symboles identiques. Il propose une interface simple et intuitive, avec des fonctionnalités de redémarrage du jeu et d'affichage du gagnant.`,
    technologies: ["JavaScript", "HTML", "CSS", "JQuery"],
    lien: "https://x-vs-o-game.netlify.app/",
  }
];
export default projectData;
