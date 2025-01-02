import { BlogSEO } from "../../components/SEO";
import PostLayout from "../../components/PostLayout";
import ShrinkHeader from "../../components/ShrinkHeader";
import Footer from "../../components/Footer";

export default function Post({ post, siteMetadata }) {
  const authorDetails = post.authors
    ? post.authors.map((author) => {
        const name = author === "default" ? siteMetadata.author : author;
        return { name };
      })
    : null;
  const postTitle = post.title?.length > 22 ? post.title.substr(0, 22) + "..." : post.title;

  return (
    <>
      <BlogSEO
        authorDetails={authorDetails}
        title={post.title}
        summary={post.summary ?? ""}
        date={post.createdAt}
        lastmod={post.updatedAt}
        url={`${siteMetadata.siteUrl}/posts/${post.title}`}
        canonicalUrl={
          post.canonicalUrl ?? `${siteMetadata.siteUrl}/posts/${post.title}`
        }
        siteUrl={siteMetadata.siteUrl}
        siteName={siteMetadata.name}
        socialBanner={siteMetadata.socialBanner}
        author={siteMetadata.author}
        siteLogo={siteMetadata.logo}
      />
      <ShrinkHeader siteMetadata={siteMetadata} postTitle={postTitle} />
      <main>
        <PostLayout post={post} siteMetadata={siteMetadata} />
      </main>
      <Footer siteMetadata={siteMetadata} />
    </>
  );
}

export async function getStaticPaths() {
  // const paths = await getAllPostTitles();
  return {
    paths: [{ params: { slug: "本网站仅作为项目的演示网站!" }}],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
    const posts = [
        {
            "title": "延边刺客语录",
            "authors": [
                "default"
            ],
            "tags": [
                "demo",
                "blog",
                "admin",
                "react",
                "nextjs"
            ],
            "draft": false,
            "content": "### 有人出生就在罗马，有人出生就是骡马。\r\n\r\n### 人一旦有了梦想，怎么活都是有灵魂的。",
            "createdAt": "2023-03-12T01:05:33.004Z",
            "updatedAt": "2023-08-27T11:05:55.491Z",
            "summary": "个人博客系统项目的演示网站",
        }
    ];
    
    const siteMetadata = {
        "name": "Blog",
        "title": "吴烦恼的个人博客",
        "author": "小吴同学",
        "email": "wusihan@costrip.cn",
        "logo": "/api/image/logo.svg",
        "avatar": "/api/image/avatar.ico",
        "socialBanner": "/api/image/og-image.png",
        "github": "https://github.com"
    };

  return {
    props: {
      post: posts[0],
      siteMetadata,
    },
  };
}
