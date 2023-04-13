import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Accueil from "../src/Pages/Accueil";
import Categorie from "./Pages/Categorie";
import Inscription from "./Pages/Inscription";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/Categorie",
    element: <Categorie />,
  },
  {
    path: "/Inscription",
    element: <Inscription />,
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
