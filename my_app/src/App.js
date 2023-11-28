import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import HomePage from "./components/HomePage";

import { createContext, useState } from "react";
import { Routes, Route } from "react-router";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
