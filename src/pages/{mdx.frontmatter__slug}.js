import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout>
      <section className="bg-gray-500 m-10 p-20 w-full rounded">
      <h1 className="mb-5 text-5xl text-blue-400 bg-gray-700 p-5 rounded">{data.mdx.frontmatter.title}</h1>
      <p className="text-xl text-white bg-gray-700 p-5 rounded">{data.mdx.excerpt}</p>
      </section>
      
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
