/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useContact } from "../hooks/useContact";

function ContactSection() {
  const {
    name,
    title,
    phone,
    email,
  } = useContact().contact[0].childMarkdownRemark.frontmatter;
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
        z-index: 100;
        @media (min-width: 768px) {
          height: 100vh;
        }
      `}
    >
      <div
        css={css`
          display: grid;
          place-items: center;
          margin-top: 53px;
          @media (min-width: 768px) {
            margin-top: 150px;
          }
        `}
      >
        <h1
          css={css`
            text-transform: uppercase;
            font-size: 40px;
          `}
        >
          Contact
        </h1>
        <div
          css={css`
            font-size: 18px;
            text-align: center;
          `}
        >
          <div>
            {name}, {title}
          </div>
          <div>
            <a href="mailto:jon@balisnm.com" css={linkStyle}>
              {email}
            </a>
          </div>
          <div>
            <a href="tel:1-505-883-7990" css={linkStyle}>
              {phone}
            </a>
          </div>
        </div>
      </div>
      <div>
        <StaticImage
          src="../images/skyline.png"
          alt="Albuquerque Skyline"
          css={css`
          height: 225px;
          overflow: hidden;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(2%);
            @media (min-width: 768px) {
              height: auto;
              width: 100%;
            }
          `}
        />
      </div>
    </section>
  );
}

export default ContactSection;
