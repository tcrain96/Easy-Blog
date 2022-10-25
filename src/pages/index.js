import * as React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
      <Layout>
        <section className="bg-gray-500 m-10 p-20 w-full rounded">
      <h1 className="mb-5 text-5xl text-blue-400 bg-gray-700 p-5 rounded">Welcome to My Blog!</h1>
      <p className="text-xl text-white bg-gray-700 p-5 rounded">Please take some time and checkout some of my posts.</p>
      </section>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>
