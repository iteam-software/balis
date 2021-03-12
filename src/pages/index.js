import * as React from "react";
import { Global, css } from "@emotion/core";
import Splash from "../components/SplashSection";
import ContactSection from "../components/ContactSection";
const IndexPage = () => {
  return (
    <main>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            background-color: #424242;
          }
          :root {
            @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");
            --font-primary: "Nunito";
            --color-dark-gray: "#424242";
            font-family: var(--font-primary);
          }
        `}
      />
      <Splash />
      <ContactSection />
    </main>
  );
};

export default IndexPage;
