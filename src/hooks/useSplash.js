import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useSplash = () => {
  const data = useStaticQuery(graphql`
    query Splash {
      allFile(filter: { sourceInstanceName: { eq: "splash" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              subtitle
              about
            }
          }
        }
      }
    }
  `);
  const splash = data?.allFile?.nodes
  return {
    splash,
  };
};
