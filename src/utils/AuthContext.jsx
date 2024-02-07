import React, { createContext, useContext, useEffect, useState } from "react";

// Création d'un contexte qui permet le partage d'informations entre les composants
const AuthContext = createContext();

// AuthProvider fournit le contexte aux composants enfants.
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // fonction pour effectuer la connexion
  const login = (newToken) => {
    setIsAuthenticated(true); // on indique que l'user est authentifié
    setToken(newToken); // on stocke le token
    localStorage.setItem("token", newToken); // Stockage du token
  };

  // fonction pour effectuer la déconnexion
  const logout = () => {
    setIsAuthenticated(false); // on indique que l'user n'est pas authentifié
    localStorage.removeItem("token"); // remove le token pour la déconnexion
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token"); // on récupère le token
    if (storedToken) login(storedToken); // si y'a un token on se connecte
  }, []);

  const contextValue = {
    isAuthenticated, // indique si l'user est authentifié ou non
    token, // jeton d'authentification
    login, // connexion
    logout, // deconnexion
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider> // fournit les valeurs aux composants enfants
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
// createContext crée un contexte 'AuthProvider' fournit
// les valeurs à ce contexte et "useContext"
// permet aux composants enfants de consommer ces valeurs
