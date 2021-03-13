import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useContact = () => {
  const data = useStaticQuery(graphql`
    query Contact {
      allFile(filter: { sourceInstanceName: { eq: "contact" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
             name
             title
             email
             phone
            }
          }
        }
      }
    }
  `)
  const contact = data?.allFile?.nodes
  return {
    contact,
  }
}