import { Component } from "solid-js";
import Card from "../../../packages/bootstrap/src/Card";
import Container from "../../../packages/bootstrap/src/Container";
import Col from "../../../packages/bootstrap/src/Col";
import Row from "../../../packages/bootstrap/src/Row";
import Image from "../../../packages/bootstrap/src/Image";
import { useHolderJSRefresh } from "./utils";
import GithubSource from "./GithubSource";

export const ImageDocs: Component = () => {
  useHolderJSRefresh();
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="ImageDocs" />
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

export default ImageDocs;
