import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cb1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chirag-batheja-386268230/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/chiragbatheja32/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/chirag_batheja/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>

            <p>Made with ❤ by Chirag Batheja</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
