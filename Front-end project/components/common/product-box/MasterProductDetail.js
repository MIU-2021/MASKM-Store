import React from "react";

const MasterProductDetail = ({
  product,
  productDetail,
  currency,
  uniqueTags,
  detailClass,
  title,
  des,
  variantChangeByColor,
}) => {
  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <div className={`product-detail ${productDetail} ${detailClass}`}>
      <div>
        {title !== "Product style 4" ? (
          <div className="rating">{RatingStars}</div>
        ) : (
          ""
        )}
        <h6>{product.title}</h6>
        {des ? <p>{product.description}</p> : ""}
        <h4>
          {currency.symbol}
          {product.price}
        </h4>

        {product.variants ?
          product.variants.map((vari) => {
            var findItem = uniqueTags.find((x) => x.color === vari.color);
            if (!findItem) uniqueTags.push(vari);
          }) : ''
        }


      </div>
    </div>
  );
};

export default MasterProductDetail;
