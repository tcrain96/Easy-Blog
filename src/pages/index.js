import * as React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
      <Layout>
        <h1 className="text-2xl font-bold underline">I'm the Home Page</h1>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>
