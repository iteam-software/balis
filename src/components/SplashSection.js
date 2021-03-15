/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useSplash } from "../hooks/useSplash";
function Splash() {
  const {
    title,
    subtitle,
    about,
  } = useSplash().splash[0].childMarkdownRemark.frontmatter;
  console.log(title, subtitle, about);
  return (
    <section
      css={css`
        position: relative;
        height: 100vh;
        background-color: #fff;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          top: 0;
          left: 0;
          @media (min-width: 1268px) {
            width: 66%;
            margin-left: 33%;
          }
        `}
      >
        <StaticImage
          src="../images/balis-logo.png"
          alt="logo"
        />
        <StaticImage
          src="../images/splash.png"
          alt="Architechture Structure"
          css={css`
            @media (min-width: 1268px) {
              display: inline-block;
              opacity: 0.9;
            }
            display: absolute;
            opacity: 0.1;
          `}
          style={{
            height: "100vh",
            position: "absolute",
            left: "0",
            top: "0",
            zIndex: "1",
          }}
        />
        <div
          css={css`
            z-index: 50;
            text-transform: uppercase;
            margin-top: 60px;
            text-align: center;
            font-size: 24px;
            @media (min-width: 1268px) {
              font-size: 44px;
              line-height: 1em;
            }
          `}
        >
          <h1>{title}</h1>
          <h1
            css={css`
              margin: 0;
              text-align: center;
              font-size: 24px;
              line-height: 0.75rem;
              @media (min-width: 1268px) {
                font-size: 56px;
                letter-spacing: 1.2rem;
                line-height: 1em;
              }
            `}
          >
            {subtitle}
          </h1>
          <p
            css={css`
              margin: 40px auto auto auto;
              font-size: 18px;
              line-height: 1.5rem;
              text-align: center;
              text-transform: none;
              max-width: 650px;
              min-width: 250px;
              height: auto;
              padding: 20px;
              @media (min-width: 768px) {
                margin: 80px auto auto auto;
              }
            `}
          >
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Splash;
