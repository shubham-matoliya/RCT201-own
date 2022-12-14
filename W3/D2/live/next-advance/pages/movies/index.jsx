// its url will be http://localhost:8080/movies
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Page = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Blogs Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Movies: {movies.length}</h1>
        {movies.map((el) => (
          <div key={el.imdbID}>
            <Image src={el.Images[0]} alt={el.Title} width="200" height={200} />
            {el.Title}
          </div>
        ))}
      </main>
    </>
  );
};

// for fonts npm install @next/font
export default Page;
// StaticProps will give error while deploying hence we use server side props
export async function getServerSideProps() {
  let response = await fetch("http://localhost:8080/movies");
  let data = await response.json();
  console.log(data);
  return {
    props: { movies: data },
  };
}
