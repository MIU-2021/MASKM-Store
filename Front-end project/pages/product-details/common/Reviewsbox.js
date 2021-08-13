import React, { useEffect, useState } from "react";
import { fecthAllCategories } from "../../../services/Categories.Services";
import { fecthAllReviewsByProduct } from "../../../services/Reviews.Services";
import Stars from "./stars";

const Reviewsbox = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fecthAllReviewsByProduct().then(response => {
            console.log("reviews", response);
            setData(response);
            //setLoading(false);
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <React.Fragment>
            {data ?
                <div className="ReviewsBox">
                    {data.map((d) => {
                        return (

                            <div className="amazing-reviews">
                                {

                                    d.status == "Approved" ? <blockquote>
                                        <header>
                                            <span data-rating="5">
                                                <Stars stars={Math.round(d.stars)} />
                                            </span>
                                            <p></p>
                                            <strong>{d.comment}</strong>
                                            <span></span>
                                            <span>By <em>FastestCowboy</em></span>
                                            <span>Verified Purchase</span>
                                        </header>
                                    </blockquote> : ""
                                }

                            </div>

                        );
                    })}
                </div>
                :
                <div></div>
            }
        </React.Fragment>
    )

}

export default Reviewsbox