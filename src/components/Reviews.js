import { Col, Row } from "react-bootstrap";

export const Reviews = () => {
  return (
    <Col lg={12}>
      <div className="reviews-bx wow slideInUp">
        <Row>
          <h3>Website Reviews</h3>
          <p>"Wow" - Harry Styles</p>
          <p>"Never seen anything like it!" - Mark Zuckerberg</p>
          <p>"Pure talent" - Dame Judi Dench</p>
          <p>"My name is Jeff"- Channing Tatum </p>
        </Row>
      </div>
    </Col>
  );
};
