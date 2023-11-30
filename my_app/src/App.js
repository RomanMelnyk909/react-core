import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import RefInput from "./components/RefInput";

import { createContext, useState } from "react";
import { Routes, Route } from "react-router";

import { HOME_PATH, PRODUCTS_PATH, REF_PATH, REGISTRATION_PATH } from "./constants/routes-links";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={PRODUCTS_PATH} element={<Products />} />
          <Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
          <Route path={REF_PATH} element={<RefInput />} />
        </Routes>
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
