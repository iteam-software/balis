/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import skyline from "../images/skyline.png";
import React from "react";

function ContactSection() {
  const linkStyle = css`
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <section
      css={css`
        padding-top: 10px;
        background-color: #424242;
        color: white;
        height: 60vh;
        position: relative;
        transform: translateY(-1%);
        @media (min-width: 768px) {
          height: 100vh;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          place-items: center;
          margin-top: 150px;
        `}
      >
        <h1
          css={css`
            text-transform: uppercase;
            font-size: 24px;
          `}
        >
          Contact
        </h1>
        <div>Jon Balis, president</div>
        <div>
          <a href="mailto:jon@balisnm.com" css={linkStyle}>
            jon@balisnm.com
          </a>
        </div>
        <div>
          <a href="tel:1-505-883-7990" css={linkStyle}>
            (505)883-7990
          </a>
        </div>
      </div>
      <StaticImage
        src="../images/skyline.png"
        alt="Albuquerque Skyline"
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
