import React, {useEffect, useState} from 'react';
import { Collapse } from 'reactstrap';
import {fecthAllCategories} from "../../../services/Categories.Services";

const Filter = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fecthAllCategories().then(response => {
      console.log("filer",response);
      setData(response);
      //setLoading(false);
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
    }, []);

    const backClick = () => {
        document.getElementById("filter").style.left = "-365px";
    }
    
    const [isBrandOpen, setIsBrandOpen] = useState(true);
    const toggleBrand = () => setIsBrandOpen(!isBrandOpen);

    return (
        <div className="collection-filter-block creative-card creative-inner">
            <div className="collection-mobile-back" onClick={backClick}>
                <span className="filter-back">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                    back
                </span>
            </div>
            <div className="collection-collapse-block border-0 open">
                <h3 className="collapse-block-title" onClick={toggleBrand}>Category</h3>
                <Collapse isOpen={isBrandOpen}>
                    <div className="collection-collapse-block-content">
                        <div className="collection-brand-filter">
                            <ul className="category-list">
                                {data.map((d ) => {
                                    return (
                                        <li><a href={null}>{d}</a></li>
                                    );
                                })}

                            </ul>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}


export default Filter;