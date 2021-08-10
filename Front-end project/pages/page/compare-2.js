import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Slider4 } from "../../services/script";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

const CompareItemsData = [
  {
    img: "../assets/images/pro3/1.jpg",
    title: "slim fit shirt",
    price: "$555",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "zara",
    size: ["xl", "L", "M", "S", "xs"],
    color: ["Red", "Blue", "Pink"],
    material: "cotton",
    availability: "in stock",
    link: "#",
  },
  {
    img: "../assets/images/pro3/1.jpg",
    title: "slim fit shirt",
    price: "$555",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "zara",
    size: ["S", "XS"],
    color: ["Blue", "Pink"],
    material: "cotton",
    availability: "in stock",
    link: "#",
  },
  {
    img: "../assets/images/pro3/1.jpg",
    title: "slim fit shirt",
    price: "$555",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "zara",
    size: ["XL", "L", "M", "S", "XS"],
    color: ["Red", "Blue", "Pink"],
    material: "cotton",
    availability: "in stock",
    link: "#",
  },
  {
    img: "../assets/images/pro3/1.jpg",
    title: "slim fit shirt",
    price: "$555",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "zara",
    size: ["XL", "L"],
    color: ["Red", "Blue", "Black"],
    material: "cotton",
    availability: "in stock",
    link: "#",
  },
  {
    img: "../assets/images/pro3/1.jpg",
    title: "slim fit shirt",
    price: "$555",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "zara",
    size: ["s", "xs"],
    color: ["blue", "pink"],
    material: "cotton",
    availability: "in stock",
    link: "#",
  },
  {
    img: "../assets/images/pro3/1.jpg",
    title: "slim fit shirt",
    price: "$555",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "zara",
    size: ["s", "xs"],
    color: ["blue", "pink"],
    material: "cotton",
    availability: "in stock",
    link: "#",
  },
];

const CompareItems = ({
  img,
  title,
  desc,
  price,
  brand,
  size,
  color,
  material,
  availability,
  link,
}) => {
  return (
    <div>
      <div className="compare-part">
        <button type="button" className="close-btn">
          <span aria-hidden="true">×</span>
        </button>
        <div className="img-secton">
          <div>
            <img
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <a href="#">
            <h5>{title}</h5>
          </a>
          <h5>{price}</h5>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>discription</h5>
          </div>
          <div className="inner-detail">
            <p>{desc}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>Brand Name</h5>
          </div>
          <div className="inner-detail">
            <p>{brand}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>size</h5>
          </div>
          <div className="inner-detail">
            <p>
              {size.map((sizeData) => {
                return sizeData + " ,";
              })}
            </p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>color</h5>
          </div>
          <div className="inner-detail">
            <p>
              {color.map((colorData) => {
                return colorData + " ,";
              })}
            </p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>material</h5>
          </div>
          <div className="inner-detail">
            <p>{material}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>availability</h5>
          </div>
          <div className="inner-detail">
            <p>{availability}</p>
          </div>
        </div>
        <div className="btn-part">
          <a href={link} className="btn btn-solid">
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

const CompareTwo = () => {
  return (
    <CommonLayout parent="home" title="compare-2">
      <section className="compare-section section-b-space ratio_asos">
        <Container>
          <Row>
            <Col>
              <Slider {...Slider4}>
                {CompareItemsData.map((data, i) => {
                  return (
                    <CompareItems
                      key={i}
                      img={data.img}
                      title={data.title}
                      price={data.price}
                      desc={data.desc}
                      size={data.size}
                      color={data.color}
                      link={data.link}
                      availability={data.availability}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default CompareTwo;
