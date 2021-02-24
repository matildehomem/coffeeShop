import React from "react";
import Title from "../globals/Title";
import { FormattedMessage, useIntl, Link } from "gatsby-plugin-intl";

export default function Info() {
  const intl = useIntl();

  return (
    <section className="py-5 my-4">
      <div className="container">
        <Title
          title={intl.formatMessage({
            id: "title_info",
            defaultMessage: "Our story",
          })}
        />
        <hr />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="text-muted mb-5">
              <FormattedMessage
                id="info_story"
                defaultMessage="Info story about coffee"
              />
            </p>
            <Link to="/about">
              <button className="btn btn-yellow">
                <FormattedMessage
                  id="go_about_page"
                  defaultMessage="About Page"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
