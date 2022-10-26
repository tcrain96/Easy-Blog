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
    <section className="flex">
      <nav
        id="side-nav"
        className={`md:flex hidden top-0 right-0 bg-blue-600 text-white fixed h-full ease-in-out duration-300 z-40 ${
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
      <nav
        id="side-nav"
        className={`overflow:auto flex md:hidden flex-col top-0 left-0 bg-blue-600 text-white fixed w-full ease-in-out duration-300 z-40 ${
          showSidebar ? "translate-y-0" : "-translate-y-3/4"
        }`}
      >
        <div className="flex flex-col ">
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
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white text-center transition duration-300 bg-blue-500 pr-5 pl-5 hover:bg-blue-400 hover:cursor-pointer "
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`h-10 ${
              showSidebar
                ? "rotate-270"
                : "rotate-90"
            }`}
          ></FontAwesomeIcon>
        </div>
        
      </nav>

      {children}
    </section>
  );
}
