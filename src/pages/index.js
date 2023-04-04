import Head from "next/head";
import { Inter } from "next/font/google";
import ArticleList from "@/components/ArticleList";
import styles from "@/styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

// this functions can be added either above or below the page
// fetchinng data using the  getStaticProps method
export const getStaticProps = async () => {
  const res = await fetch(`https://dummyjson.com/posts?limit=8`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
