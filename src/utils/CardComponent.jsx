import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { jwtDecode } from "jwt-decode";

const CardComponent = ({ accommodations }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClick = (accommodation) => {
    if (isAuthenticated) {
    } else {
      navigate("/login");
    }
  };
  const token = localStorage.getItem("token");

  let id;
  if (token) {
    console.log(token);
    const decoded = jwtDecode(token); // on décode le token

    id = decoded.userId.toString();
  } else {
    id = "";
  }

  console.log(accommodations);

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
      {accommodations.map((accommodation, index) => (
        <div key={index} className="flex justify-center items-center mt-10">
          <div className="w-full max-w-xs lg:max-w-md bg-white rounded-lg shadow-lg dark:bg-[#161618]">
            <img
              className="rounded-lg"
              src={accommodation.image}
              alt="Photo de l'annonce"
            />
            <div className="py-2 px-2 text-start">
              <a className="block text-lg font-bold text-gray-800 dark:text-white">
                {accommodation.name}
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-400">
                {accommodation.description}
              </span>
              <div className="flex justify-between gap-8 mt-4 items-center">
                <p className="text-white text-sm">{accommodation.price} €</p>

                {/* Condition pour afficher les boutons uniquement si l'utilisateur n'est pas propriétaire de l'annonce */}
                {id !== accommodation.user_id?.toString() && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleClick(accommodation)}
                      className="text-white rounded-lg py-1 px-2 bg-indigo-500  hover:bg-indigo-700"
                    >
                      Réserver
                    </button>
                    <svg
                      onClick={() => handleClick(accommodation)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
