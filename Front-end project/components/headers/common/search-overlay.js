import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const closeSearch = () => {
  document.getElementById("search-overlay").style.display = "none";
};
const SearchOverlay = () => {
  return (
    <div id="search-overlay" className="search-overlay">
      <div>
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          ×
        </span>
        <div className="overlay-content">
          <Container>
            <Row>
              <Col xl="12">
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Search a Product"
                    />
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
