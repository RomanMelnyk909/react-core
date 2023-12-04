import NavigationItem from "../NavigationItem/NavigationItem";
import "./header.css";
import { UsersContext } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  HOME_PATH,
  PRODUCTS_PATH,
  REF_PATH,
  REGISTRATION_PATH,
} from "../../constants/routes-links";

const Header = () => {
  const { usersCount } = useContext(UsersContext);

  const navElements = [
    {
      text: "First",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Second",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Third",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "samsung",
      isUppercasetext: true,
    },
  ];

  const someParam = "hello_param";

  return (
    <header>
      <Link to={HOME_PATH}>Home</Link>
      <Link to={PRODUCTS_PATH}>Products</Link>
      <Link to={REGISTRATION_PATH}>Registration</Link>
      <Link to={`/ref/${someParam}`}>Ref</Link>
      {/* {navElements.map((element) => {
        return (
          <NavigationItem
            key={element.text}
            text={element.text}
            isUppercasetext={element.isUppercasetext}
            description={element.description}
          />
        );
      })} */}
      <div>User Count: {usersCount}</div>
    </header>
  );
};

export default Header;
