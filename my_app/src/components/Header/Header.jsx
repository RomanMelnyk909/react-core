import NavigationItem from "../NavigationItem/NavigationItem";
import "./header.css";

const Header = () => {
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

  return (
    <header>
      {navElements.map((element) => {
        return (
          <NavigationItem
            key={element.text}
            text={element.text}
            isUppercasetext={element.isUppercasetext}
            description={element.description}
          />
        );
      })}
    </header>
  );
};

export default Header;
