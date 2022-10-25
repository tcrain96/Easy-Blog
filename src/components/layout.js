import * as React from "react";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            date
          }
          id
        }
      }
    }
  `);

  return (
    <section className="flex h-screen">
      <nav
        id="side-nav"
        className={`flex top-0 right-0 bg-blue-600 text-white fixed h-full ease-in-out duration-300 z-40 ${
          showSidebar ? "translate-x-0" : "translate-x-3/4"
        }`}
      >
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white transition duration-300 bg-blue-500 pr-5 pl-5 hover:bg-blue-400 hover:cursor-pointer "
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`align-self-center h-screen w-5 text-center ${
              showSidebar
                ? "rotate-0"
                : "rotate-180"
            }`}
          ></FontAwesomeIcon>
        </div>
        <div className="flex flex-col">
          {data.allMdx.nodes.map((node) => (
            <Link
              className={`ease-in-out duration-300 p-5 m-0 mb-0 border-b-2 border-blue-500 bg-gray-700 w-700 hover:bg-gray-600 ${
                showSidebar
                  ? "pointer-events-auto"
                  : "pointer-events-none opacity-0"
              }`}
              to={`/${node.frontmatter.slug}`}
              key={node.id}
            >
              <span className="font-bold"> {node.frontmatter.title} </span> -{" "}
              {node.frontmatter.date}
            </Link>
          ))}
        </div>
      </nav>

      {children}
    </section>
  );
}
