import * as React from "react"
import { Link } from "gatsby"

export default function Layout ({children}) {
  return (
    <section>
        <Link to="/post-1">Post 1</Link>
        <Link to="/post-2">Post 2</Link>
        <Link to="/post-3">Post 3</Link>
        {children}
    </section>
  )
}

