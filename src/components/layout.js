import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <section>
      {data.allMdx.nodes.map((node) => (
        <nav key={node.id}>
          <Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
        </nav>
      ))}
      {children}
    </section>
  );
}
