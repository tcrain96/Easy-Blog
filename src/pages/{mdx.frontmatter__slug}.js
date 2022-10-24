import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.excerpt}</p>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      excerpt
    }
  }
`;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;
