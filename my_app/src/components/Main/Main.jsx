// import RegistrationForm from "../RegistrationForm";
import Products from "../Products";

import Modal from "../Modal";
import RefInput from "../RefInput";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        {/* <RefInput /> */}
        {/* <RegistrationForm /> */}
        <Products />
        <Modal />
      </div>
    </div>
  );
};

export default Main;
