import React from "react";
import parallax2 from "../../../../public/assets/images/christmas/parallax/2.jpg";
const Data = [
  {
    imgSrc: "../assets/images/christmas/f-p/1.png",
    title: "Flower",
    desc: "Fashion Has Been Creating Well-Designed",
  },
  {
    imgSrc: "../assets/images/christmas/f-p/2.png",
    title: "chocolate",
    desc: "Fashion Has Been Creating Well-Designed",
  },
  {
    imgSrc: "../assets/images/christmas/f-p/3.png",
    title: "gift cards",
    desc: "Fashion Has Been Creating Well-Designed",
  },
  {
    imgSrc: "../assets/images/christmas/f-p/4.png",
    title: "photo frame",
    desc: "Fashion Has Been Creating Well-Designed",
  },
  {
    imgSrc: "../assets/images/christmas/f-p/5.png",
    title: "watches",
    desc: "Fashion Has Been Creating Well-Designed",
  },
  {
    imgSrc: "../assets/images/christmas/f-p/6.png",
    title: "plants",
    desc: "Fashion Has Been Creating Well-Designed",
  },
];

const BatchLeft = ({ imgSrc, title, desc }) => {
  return (
    <li>
      <div className="media">
        <div className="media-body">
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
        <img
          className="img-fluid"
          src={imgSrc}
          alt="Generic placeholder image"
        />
      </div>
    </li>
  );
};

const BatchRight = ({ imgSrc, title, desc }) => {
  return (
    <li>
      <div className="media">
        <img
          className="img-fluid"
          src={imgSrc}
          alt="Generic placeholder image"
        />
        <div className="media-body">
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
const Section = () => {
  return (
    <section className="p-0 overflow-cls">
      <div
        className="full-banner feature-banner"
        style={{
          backgroundImage: `url('${parallax2}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "block",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="feature-text">
                <h2>SEND GIFT YOUR LOVED ONE</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <ul className="feature-object">
                {Data.slice(0, 3).map((data, i) => {
                  return (
                    <BatchLeft
                      key={i}
                      imgSrc={data.imgSrc}
                      title={data.title}
                      desc={data.desc}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-4 col-sm-6 offset-lg-4">
              <ul className="feature-object-right">
                {Data.slice(3, 6).map((data, i) => {
                  return (
                    <BatchRight
                      key={i}
                      imgSrc={data.imgSrc}
                      title={data.title}
                      desc={data.desc}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="center-img">
          <img
            src=" ../assets/images/christmas/bg1.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="banner-decor">
          <div className="left-img">
            <img
              src="../assets/images/christmas/decor.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="right-img">
            <img
              src="../assets/images/christmas/decor.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
