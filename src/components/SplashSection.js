/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import splash from "../images/splash.png";
import { StaticImage } from "gatsby-plugin-image";
function Splash() {
  return (
    <section
      css={css`
        position: relative;
        height: 100vh;
        background-color: #fff;
      `}
    >
      <StaticImage
        src="../images/splash.png"
        alt="Architechture Structure"
        style={{
          height: "100vh",
          position: "absolute",
          left: "0",
          fontFamily: "var(--font-primary)",
          top: "0",
        }}
      />
      <div
        css={css`
          margin-left: 33%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          top: 0;
          width: 66%;
          left: 0;
        `}
      >
        <StaticImage src="../images/balis-logo.png" alt="logo" />
        <div
          css={css`
            z-index: 1;
            margin-top: 60px;
            text-transform: uppercase;
            line-height: 1rem;

            margin: 0;
            font-size: 40px;
          `}
        >
          <h1>Construction Cost Estimating</h1>
          <h1
            css={css`
              margin: 0;
              line-height: 1rem;
              text-align: center;
            `}
          >
            & Project Controls
          </h1>
          <p
            css={css`
              margin: auto;
              font-size: 16px;
              text-transform: none;
              width: 500px;
              height: auto;
            `}
          >
            Balis & Company is an independent consulting firm founded in 1981,
            providing construction cost analysis to architects, engineers,
            facility owners and public agencies. Major services include
            construction cost estimating from programming through bid analysis
            phases, project scheduling, life cycle costing, and presentation of
            value engineering sessions. Our staff of seven includes one Project
            Management Professional, one Registered Architect and one Certified
            Professional Estimator.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Splash;
