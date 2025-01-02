import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { PageSEO } from "../components/SEO";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Footer from "../components/Footer";

const DISPLAY_POST_NUMBER = 10;

export default function Home({ allPostsData, siteMetadata }) {
  const [filteredPosts] = useState(allPostsData);

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        siteUrl={siteMetadata.siteUrl}
        siteName={siteMetadata.name}
        socialBanner={siteMetadata.socialBanner}
      />
      <div className={styles["container"]}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header siteMetadata={siteMetadata} nav="home" />

        <main className={styles["main"]}>

          <hr className={styles["search-post-hr"]} />

          <div className={styles["post-list-wrap"]}>
            <PostList posts={filteredPosts} displayN={DISPLAY_POST_NUMBER} />
          </div>
        </main>

        <Footer siteMetadata={siteMetadata} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = [
    {
      "title": "延边刺客语录",
      "tags": [ "demo", "blog", "admin", "react", "nextjs"],
      "category": "default",
      "createdAt": "2023-03-12T01:05:33.004Z",
      "summary": "个人博客系统项目的演示网站",
    }
  ];
  
  const siteMetadata = {
    title: "吴烦恼的个人博客",
    name: "Blog",
    github: "https://github.com",
    email: "wusihan@costrip.cn",
  };

  return {
    props: {
      allPostsData,
      siteMetadata
    },
  };
}
