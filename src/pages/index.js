import * as React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
      <Layout>
        <section className=" bg-gray-500 text-center md:text-left md:m-10 m-5 md:p-20 p-10 md:mr-40 mr-28 w-full rounded">
      <h1 className=" drop-shadow mb-5 text-5xl text-blue-400 bg-gray-700 p-5 rounded">Welcome to my blog!</h1>
      <p className=" drop-shadow text-xl text-white bg-gray-700 p-5 rounded">Please take a moment to look around and find stuff you are interested in reading.</p>
      </section>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>
