import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout>
      <section className="drop-shadow-xl bg-gray-500 text-center md:text-left md:m-10 m-5 md:p-20 p-10 md:mr-40 md:mt-0 mt-20 w-full rounded">
      <h1 className="drop-shadow-lg mb-5 text-5xl text-blue-400 bg-gray-700 p-5 rounded">{data.mdx.frontmatter.title}</h1>
      <p className="drop-shadow-lg text-xl text-white bg-gray-700 p-5 rounded">{data.mdx.excerpt}</p>
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
