import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Grid.css";

export default function Grid() {
  return (
    <>
      <h2 className="container">Container Example</h2>
      <p className="container">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>

      <h2 className="container">Columns Example</h2>
      <Container>
        {/* basic column use */}
        <Row className="mb-4">
          <Col xs="auto">
            <div className="box">text</div>
          </Col>
          <Col xs={4}>
            <div className="box"></div>
          </Col>
          <Col>
            <div className="box"></div>
          </Col>
          <Col>
            <div className="box"></div>
          </Col>
        </Row>

        {/* responsive columns */}
        <Row className="mb-4">
          <Col lg={4} xs={8}>
            <div className="box">responsive</div>
          </Col>
          <Col xs={4}>
            <div className="box"></div>
          </Col>
        </Row>

        {/* Offset */}
        <Row className="mb-4">
          <Col xs={3}>
            <div className="box"></div>
          </Col>
          {/* use object prop form */}
          <Col xs={{ span: 3, offset: 3 }}>
            <div className="box">offset</div>
          </Col>
        </Row>
      </Container>

      <h2 className="container">Row Example</h2>
      <Container className="mb-4">
        <Row xs={2} lg={4} className="gy-5">
          <Col>
            <div className="box"></div>
          </Col>
          <Col>
            <div className="box"></div>
          </Col>
          <Col>
            <div className="box"></div>
          </Col>
          <Col>
            <div className="box"></div>
          </Col>
          <Col>
            <div className="box"></div>
          </Col>
        </Row>
      </Container>

      {/* <h2 className="container">Row Example</h2>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 mb-4">
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}
