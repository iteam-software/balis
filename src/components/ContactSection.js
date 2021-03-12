/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

import React from "react";

function ContactSection() {
  return (
    <section
      css={css`
        padding-top: 10px;
        transform: translateY(-1%);
        background-color: #424242;
        color: white;
        height: 100vh;
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          margin-top: 250px;
          justify-content: center;
        `}
      >
        Contact Section
      </div>
      <StaticImage
        src="../images/skyline.png"
        alt="logo"
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          transform: translateY(2%);
        `}
      />
    </section>
  );
}

export default ContactSection;
