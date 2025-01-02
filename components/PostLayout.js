import styles from "../styles/PostLayout.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import PostLoading from "./PostLoading";

//import TocAndMD from "./TocAndMD";


//懒加载TocAndMD组件
const TocAndMD = dynamic(()=>import("./TocAndMD"), {
  loading: () => {
        return <PostLoading />;
      },
});

export default function PostLayout({ post, siteMetadata }) {
  const postCreatedDate = new Date(post.createdAt);
  const postUpdatedDate = new Date(post.updatedAt);
  const formatCreated = `${postCreatedDate.getFullYear()}年${
    postCreatedDate.getMonth() + 1
  }月${postCreatedDate.getDate()}日`;
  const formatUpdated = `${postUpdatedDate.getFullYear()}年${
    postUpdatedDate.getMonth() + 1
  }月${postUpdatedDate.getDate()}日`;


  return (
    <div className={styles["layout-wrap"]}>
      <div className={styles["article-and-next"]}>
        <article>
          <header>
            <h2 className={styles["post-title"]}>{post.title}</h2>
            <div className={styles["authors-box"]}>
              {post?.authors?.map((author) => {
                if (author === "default") {
                  return (
                    <p className={styles["author"]} key={author}>
                      {siteMetadata.author}
                    </p>
                  );
                } else {
                  return (
                    <p className={styles["author"]} key={author}>
                      <span className="icon-user"></span>
                      {author}
                    </p>
                  );
                }
              })}
            </div>
            {post?.tags?.length > 0 ? (
              <div className={styles["tags-box"]}>
                {post.tags.map((tag) => {
                  return (
                      <span className={styles["post-tag"]} key={tag}>
                        {tag}
                      </span>
                  );
                })}
              </div>
            ) : null}
            <time
              className={styles["time"]}
            >{`发布时间 : ${formatCreated}`}</time>
            <time
              className={styles["time"]}
            >{`更新时间 : ${formatUpdated}`}</time>
          </header>
          <TocAndMD mdChildren={post.content} />
        </article>
      </div>
    </div>
  );
}
