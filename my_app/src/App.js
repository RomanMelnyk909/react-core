import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { createContext, useState } from "react";

export const Context = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);
  return (
    <Context.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        {usersCount}
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
