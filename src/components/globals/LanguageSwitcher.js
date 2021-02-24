import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const LanguageSwitcher = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `black` : `gray`,
                margin: 10,
                cursor: `pointer`,
              }}>
              {language.toUpperCase()}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default LanguageSwitcher;
