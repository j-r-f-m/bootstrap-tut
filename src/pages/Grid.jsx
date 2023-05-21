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
      <div className="container">
        <div className="row mb-4">
          <div className="col-auto">
            <div className="box">text</div>
          </div>
          <div className="col-4">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
          <div className="col">
            <div className="box"></div>
          </div>
        </div>

        {/* responsive - using breakpoints */}
        <div className="row mb-4">
          {/* for all screen sizes large and above the column will take up 4
          units of space. below large screen sizes the column will take up 8 
          units of space */}
          <div className="col-lg-4 col-8">
            <div className="box">responsive</div>
          </div>
          <div className="col-4">
            <div className="box"></div>
          </div>
        </div>

        {/* offset */}
        <div className="row mb-4">
          <div className="col-3">
            <div className="box"></div>
          </div>
          <div className="col-3 offset-3">
            <div className="box">offset</div>
          </div>
        </div>
      </div>

      <h2 className="container">Row Example</h2>
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
      </div>

      <h2 className="container">react comps</h2>
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
        <Row className="mb">
          <Col xs={3}>
            <div className="box"></div>
          </Col>
          {/* use object prop form */}
          <Col xs={{ span: 3, offset: 3 }}>
            <div className="box">offset</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
