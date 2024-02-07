import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoutes = () => {
  // on récupère la valeur de isAuthenticated
  const { isAuthenticated } = useAuth();
  // si l'user est authentifié on affiche le composant Outlet sinon on le redirige vers la page de connexion
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
