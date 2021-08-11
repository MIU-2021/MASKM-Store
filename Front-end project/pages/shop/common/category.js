import React, { useState, useContext } from "react";
import { Collapse } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";

const Category = () => {
  const context = useContext(FilterContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const setSelectedCategory = context.setSelectedCategory;
  const [url, setUrl] = useState();

  const updateCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title" onClick={toggleCategory}>
          Category
        </h3>
        <Collapse isOpen={isCategoryOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <ul className="category-list">
                <li>
                  <a href={null} onClick={() => updateCategory("all")}>
                    all products
                  </a>
                </li>
                <li>
                  <a href={null} onClick={() => updateCategory("books")}>
                    fashion
                  </a>
                </li>
                <li>
                  <a href={null} onClick={() => updateCategory("electronics")}>
                    electronics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Category;
