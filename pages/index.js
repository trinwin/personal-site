import Head from "next/head";
import Link from "next/link";
import Intro from "../components/intro";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  return (
    <div>
      <Intro />
    </div>
  );
}

// getStaticProps runs only on the server-side, never be run on the client-side
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
