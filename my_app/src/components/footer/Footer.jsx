import "./footer.css";
import FooterItem from "../FooterItem";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterItem content="Головна" isLowersetext={false} />
      <FooterItem content="Про нас" isLowersetext={false} />
      <FooterItem content="Контакти" isLowersetext={false} />
      <FooterItem content="Блог" isLowersetext={false} />
    </footer>
  );
};

export default Footer;
