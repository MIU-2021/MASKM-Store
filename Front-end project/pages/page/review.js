import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import two from "../../public/assets/images/2.jpg";
import avtar from "../../public/assets/images/avtar.jpg";
import twenty from "../../public/assets/images/20.jpg";
import { Container, Row, Col, Media } from "reactstrap";

const ReviewContent = [
  {
    img: avtar,
    name: "Mark Jecno",
    datetime: "12 Jannuary 2018 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: two,
    name: "Mark Jecno",
    datetime: "12 Jannuary 2018 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: twenty,
    name: "Mark Jecno",
    datetime: "12 Jannuary 2018 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: avtar,
    name: "Mark Jecno",
    datetime: "12 Jannuary 2018 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
  {
    img: two,
    name: "Mark Jecno",
    datetime: "12 Jannuary 2018 at 1:30AM",
    review:
      "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.",
    likes: "14",
    dislikes: "2",
  },
];

const MasterReview = ({ img, name, datetime, review, likes, dislikes }) => {
  return (
    <li>
      <div className="media">
        <Media src={img} alt="Generic placeholder image" />
        <div className="media-body">
          <h6>
            {name} <span>({datetime})</span>
          </h6>
          <p>{review}</p>
          <ul className="comnt-sec">
            <li>
              <a href="#">
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                <span>({likes})</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="unlike">
                  <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                  <span>({dislikes})</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

const Review = () => {
  return (
    <CommonLayout parent="home" title="review">
      <section className="section-b-space blog-detail-page review-page">
        <Container>
          <Row>
            <Col sm="12">
              <ul className="comment-section">
                {ReviewContent.map((review, i) => {
                  return (
                    <MasterReview
                      key={i}
                      img={review.img}
                      name={review.name}
                      datetime={review.datetime}
                      review={review.review}
                      likes={review.likes}
                      dislikes={review.dislikes}
                    />
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Review;
