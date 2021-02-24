import React from "react";
import Img from "gatsby-image";
import { FormattedMessage } from "gatsby-plugin-intl";

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>{product.price}€</h6>
          <button
            className="btn btn-yellow mt-3 snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-image={product.image.fluid.src}
            data-item-url="http://localhost:8000/" //put the final URL
          >
            <FormattedMessage id="add_cart" defaultMessage="Add to Cart" />
          </button>
        </div>
      </div>
    </div>
  );
}
