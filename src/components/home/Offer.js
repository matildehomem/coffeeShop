import React from "react";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";

import Title from "../globals/Title";
import { FaCoffee } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

export default function Offer() {
  const intl = useIntl();

  return (
    <div className="container py-5">
      <Title
        title={intl.formatMessage({
          id: "offer_title",
          defaultMessage: "What we offer",
        })}
      />
      <hr />
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        iusto?
      </p>
      <div className="row my-5">
        <div className="col-10 col-lg-4 mx-auto text-center ">
          <FaCoffee className="icon" />
          <h5 className="text-uppercase">
            <FormattedMessage id="coffee" defaultMessage="Coffee" />
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, quidem?
          </p>
        </div>
        <div className="col-10 col-lg-4 mx-auto text-center ">
          <FaBeer className="icon" />
          <h5 className="text-uppercase">
            <FormattedMessage id="tea" defaultMessage="Tea" />
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, quidem?
          </p>
        </div>

        <div className="col-10 col-lg-4 mx-auto text-center ">
          <FaDatabase className="icon" />
          <h5 className="text-uppercase">
            <FormattedMessage id="cookies" defaultMessage="Cookies" />
          </h5>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, quidem?
          </p>
        </div>
      </div>
    </div>
  );
}
