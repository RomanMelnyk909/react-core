import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
