import { Container, Row, Col } from "react-bootstrap";
import { Reviews } from "./Reviews";
import logo from "../assets/img/RRR.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Reviews />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rubyratana/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/groups/3045800523/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/taylorswift/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2000. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
