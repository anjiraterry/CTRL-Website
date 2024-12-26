import React, { useState, createContext, useContext } from "react";
import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss"
import Signup from "./components/Signup/Signup";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import Admin from "./pages/Admin/Admin";
import Faq from "./pages/Faq/Faq";
import Onboarding from "./pages/Onboarding/Onboarding";

const SignupContext = createContext();

export const useSignupContext = () => useContext(SignupContext);


const Layout = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const isOnboardingPage = location.pathname === "/onboarding";

 

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setIsModalOpen(!!value); // Open modal if there's a search term
  };


  return (
    <SignupContext.Provider value={{ isSignupOpen, setIsSignupOpen }}>
    <div className="app">
      {!isOnboardingPage && (
        <Navbar
          setIsSignupOpen={setIsSignupOpen}
          isSignupOpen={isSignupOpen}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      )}
      <Outlet />
      {!isOnboardingPage && <Footer />}
      {isSignupOpen && <Signup setIsSignupOpen={setIsSignupOpen} />}
      <SearchProducts searchTerm={searchTerm} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  </SignupContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
      {
        path: "/products/:id",
        element: <Products  />,
      },
      {
        path: "/product/:id",
        element: <Product  />,
      },
      {
        path: "/onboarding",
        element: <Onboarding/>,
      },
      
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
