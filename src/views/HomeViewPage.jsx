import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CardComponent from "../utils/CardComponent";
import ModalComponent from "../utils/ModalComponent";

const homeViewPage = () => {
  const [accommodations, setAccommodations] = useState([]); // state que l'on passe en props pour le CardComponent

  // fonction qui me permet de récupérer toutes les accommodations de la base de données
  const getAllAccommodations = async () => {
    const token = localStorage.getItem("token"); // on récupère le token depuis le localStorage
    const response = await fetch("http://localhost:3000/api/accommodations", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // on envoie le token dans le header
        "Content-Type": "application/json", // on précise le type de contenu
      },
    });

    if (!response.ok) {
      // si la réponse n'est pas ok
      throw new Error("An error occurred"); // on lance une erreur
    }
    const data = await response.json(); // on récupère les données de la réponse
    setAccommodations(data); // on met à jour le state avec les données récupérées
  };

  // On utilise useEffect pour appeler exécuter getAllAccommodations une seule fois
  useEffect(() => {
    getAllAccommodations();
  }, []); // Tableau vide pour que ça ne s'exécute qu'une seule fois

  // Fonction qui me permet d'ajouter une accommodation à la liste des accommodations
  const addAccommodation = (newAccommodation) => {
    setAccommodations([...accommodations, newAccommodation]);
  };

  return (
    <div>
      <HeroSection />
      <ModalComponent addAccommodation={addAccommodation} />
      {/*Fichier pour l'ajout d'une accommodation */}
      <CardComponent accommodations={accommodations} />
      {/*Fichier pour mapper sur les accommodations */}
    </div>
  );
};

export default homeViewPage;
