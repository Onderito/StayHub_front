import "./App.css";
import HomeViewPage from "./views/homeViewPage";
import LoginViewPage from "./views/LoginViewPage";
import RegisterViewPage from "./views/RegisterViewPage";
import FavoriteViewPage from "./views/FavoriteViewPage";
import ReservationViewPage from "./views/ReservationViewPage";
import ProfilViewPage from "./views/ProfilViewPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomeViewPage />} />
            <Route path="login" element={<LoginViewPage />} />
            <Route path="register" element={<RegisterViewPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="favorites" element={<FavoriteViewPage />} />
              <Route path="reservations" element={<ReservationViewPage />} />
              <Route path="profile" element={<ProfilViewPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
