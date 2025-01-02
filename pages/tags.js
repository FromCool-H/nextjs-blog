import Link from "next/link";
import { PageSEO } from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Tags.module.css";
import styleAni from "../styles/AnimatePublic.module.css";

export default function Tags({ allTags, siteMetadata }) {
  return (
    <>
      <PageSEO
        title={`标签 - ${siteMetadata.author}`}
        description={siteMetadata.description}
        siteUrl={siteMetadata.siteUrl}
        siteName={siteMetadata.name}
        socialBanner={siteMetadata.socialBanner}
      />
      <Header siteMetadata={siteMetadata} nav="tags" />
      <main className={`${styles["tags-page-main"]} ${styleAni["fade-in-top"]}`}>
        <div className={styles["tags-box"]}>
        {allTags.map((tag) => {
          return (
              <span key={tag.tagName}  className={styles["tag"]}>
                {tag.tagName}<span className={styles["post-number"]}>{tag.value}</span>
              </span>
          );
        })}</div>
      </main>
      <Footer siteMetadata={siteMetadata} />
    </>
  );
}

export async function getStaticProps() {

  return {
    props: {
      allTags: [
          { tagName: "阳", value: 1 },
          { tagName: "光", value: 1 },
          { tagName: "开", value: 1 },
          { tagName: "朗", value: 1 },
          { tagName: "大", value: 1 },
          { tagName: "男", value: 1 },
          { tagName: "孩", value: 1 }
      ],
      siteMetadata: {
          author: '小吴同学',
          title: "吴烦恼的个人博客",
          name: "Blog",
          github: "https://github.com",
          email: "wusihan@costrip.cn",
      },
    },
  };
}
