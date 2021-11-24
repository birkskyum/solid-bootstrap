import { Component, For } from "solid-js";
import Card from "../bootstrap/Card";
import Container from "../bootstrap/Container";
import Col from "../bootstrap/Col";
import Row from "../bootstrap/Row";
import Image from "../bootstrap/Image";

export const ImageDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Images</h3>
      </div>
      <div>
        <Card>
          <Card.Header>Shape</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" thumbnail />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Fluid</Card.Header>
          <Card.Body>
            <Image src="holder.js/100px250" fluid />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
