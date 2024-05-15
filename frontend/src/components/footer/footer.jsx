import ThemeButton from "../context/themeButton/themeButton";
import "./footer.css";
const FooterPage = () => {
  return (
    <div className="footer-container">
      <p>Derechos reservados &copy; PPS</p>
      {/* <div className='chat'><Chat/></div> */}
      <ThemeButton />
    </div>
  );
};

export default FooterPage;
