import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import ReviewForm from "./reviewform";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="tab-product m-0">
      <Container>
        <Row>
          <Col sm="12" lg="12">
            <Row className="product-page-main m-0">
              <Nav tabs className="nav-material">
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    REVIEWS
                  </NavLink>
                </NavItem>


                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => setActiveTab("4")}
                  >
                    Write Review
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="nav-material">
                <TabPane tabId="1">
                  <p className="mb-0 pb-0">
                    reviews here
                  </p>
                </TabPane>

                <TabPane tabId="4">
                  <p className="mb-0 pb-0">
                    <ReviewForm />
                  </p>
                </TabPane>
              </TabContent>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;
