import React, { useState } from "react";
import { Container, Media } from "reactstrap";
import Masonry from "react-masonry-css";
import {
  allData,
  fashionData,
  bagsData,
  shoesData,
  watchData,
} from "../../../data/portfolioData";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

const MasterTabPannel = ({ data, grid, colClass }) => {
  return (
    <>
      {" "}
      <Masonry
        breakpointCols={grid}
        className="isotopeContainer row"
        columnClassName={`isotopeSelector ${colClass}`}
      >
        {data.length > 0
          ? data.map((item, index) => (
              <div className="overlay" key={index}>
                <div className="border-portfolio">
                  <div>
                    <Media
                      src={item.img}
                      className="img-fluid blur-up lazyload"
                    />
                  </div>
                </div>
              </div>
            ))
          : "!! No Blogs Found"}
      </Masonry>
    </>
  );
};

const MasonryTwoPage = ({ colClass, grid, fluid }) => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <>
      <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
        <Container fluid={fluid}>
          <Tabs>
            <TabList align="center" id="form1">
              <Tab
                className={`filter-button project_button ${
                  activeTab == "all" ? "active" : ""
                }`}
                onClick={() => setActiveTab("all")}
                data-filter="all"
              >
                All
              </Tab>
              <Tab
                className={`filter-button project_button ${
                  activeTab == "fashion" ? "active" : ""
                }`}
                onClick={() => setActiveTab("fashion")}
                data-filter="fashion"
              >
                Fashion
              </Tab>
              <Tab
                className={`filter-button project_button ${
                  activeTab == "bags" ? "active" : ""
                }`}
                onClick={() => setActiveTab("bags")}
                data-filter="bags"
              >
                Bags
              </Tab>
              <Tab
                className={`filter-button project_button ${
                  activeTab == "shoes" ? "active" : ""
                }`}
                onClick={() => setActiveTab("shoes")}
                data-filter="shoes"
              >
                Shoes
              </Tab>
              <Tab
                className={`filter-button project_button ${
                  activeTab == "watch" ? "active" : ""
                }`}
                onClick={() => setActiveTab("watch")}
                data-filter="watch"
              >
                Watch
              </Tab>
            </TabList>
            <Container fluid={fluid}>
              <TabPanel>
                <MasterTabPannel
                  data={allData}
                  grid={grid}
                  colClass={colClass}
                />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel
                  data={fashionData}
                  grid={grid}
                  colClass={colClass}
                />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel
                  data={bagsData}
                  grid={grid}
                  colClass={colClass}
                />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel
                  data={shoesData}
                  grid={grid}
                  colClass={colClass}
                />
              </TabPanel>
              <TabPanel>
                <MasterTabPannel
                  data={watchData}
                  grid={grid}
                  colClass={colClass}
                />
              </TabPanel>
            </Container>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default MasonryTwoPage;
