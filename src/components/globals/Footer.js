import React from "react";
import { useIntl } from "gatsby-plugin-intl";

export default function Footer() {
  const intl = useIntl();

  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-white pt-2 text-center text-capitalize">
            <p>
              {intl.formatMessage({
                id: "footer",
                defaultMessage: "All rights reserved",
              })}
              &copy; {new Date().getFullYear().toString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
