import * as React from "react";
import {useState} from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {

  const [NavOpen, showNavBar] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
          }
          id
        }
      }
    }
  `);

  return (
    <section className="flex">
      <nav id="side-nav" className={`top-0 left-0 w-[35vw] bg-blue-600 p-10 pl-20 text-white fixed h-full z-40 ${showNavBar?"translate-x-0":"translate-x-full"}`}>
      {data.allMdx.nodes.map((node) => (
          <Link className="flex" to={`/${node.frontmatter.slug}`} key={node.id}>
            {node.frontmatter.title}
            </Link>
      ))}
      </nav>
      <div onClick={()=>showNavBar(!NavOpen)} className="transition duration-300 bg-blue-500 pr-5 pl-5 hover:bg-blue-600 hover:cursor-pointer">
      <FontAwesomeIcon icon={faArrowRight} className="align-self-center h-screen w-5 text-center"></FontAwesomeIcon>
      </div>
      
      {children}
      
    </section>
    
  );
}
