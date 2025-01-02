import { useEffect, useState, useCallback } from "react";
import styles from "../styles/Comments.module.css";
import styleAni from "../styles/AnimatePublic.module.css";

export default function Comments({
  postId,
  isCommentChange,
  setIsCommentChange,
}) {
  const [comments, setComments] = useState(null);

  const fetchData = useCallback(async (signal) => {
    // const response = await fetch("/api/comments/" + postId, {
    //   method: "GET",
    //   signal,
    // });
    // const json = await response.json();
    setComments([
      {
        "_id": "645b61619afc601933fb261f",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "测试",
        "comment": "测试",
        "published": false,
        "createdAt": "2023-05-10T09:18:25.755Z",
        "updatedAt": "2023-05-10T09:18:25.755Z",
        "__v": 0
      },
      {
        "_id": "65e9a056c26ce4ac34cc6abb",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "dxyzxy",
        "comment": "阿达是的",
        "published": false,
        "createdAt": "2024-03-07T11:09:10.215Z",
        "updatedAt": "2024-03-07T11:09:10.215Z",
        "__v": 0
      },
      {
        "_id": "65ec1fe3c26ce4ac34cc6b17",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "23",
        "comment": "123",
        "published": false,
        "createdAt": "2024-03-09T08:37:55.076Z",
        "updatedAt": "2024-03-09T08:37:55.076Z",
        "__v": 0
      },
      {
        "_id": "6610b9c4a51d4a54f79eeb2c",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "test1",
        "comment": "测试111",
        "published": false,
        "createdAt": "2024-04-06T02:56:04.511Z",
        "updatedAt": "2024-04-06T02:56:04.511Z",
        "__v": 0
      },
      {
        "_id": "66a35c5e1fe2e2024cf6fa44",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "11",
        "comment": "比心",
        "published": false,
        "createdAt": "2024-07-26T08:20:46.989Z",
        "updatedAt": "2024-07-26T08:20:46.989Z",
        "__v": 0
      },
      {
        "_id": "66b325341fe2e2024cf6fb22",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "harhar",
        "comment": "haha",
        "published": false,
        "createdAt": "2024-08-07T07:41:40.532Z",
        "updatedAt": "2024-08-07T07:41:40.532Z",
        "__v": 0
      },
      {
        "_id": "66b325341fe2e2024cf6fb26",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "harhar",
        "comment": "haha",
        "published": false,
        "createdAt": "2024-08-07T07:41:40.789Z",
        "updatedAt": "2024-08-07T07:41:40.789Z",
        "__v": 0
      },
      {
        "_id": "6773a79028e426cd6fe87ada",
        "post": "640d255cb8b5337fb2592b52",
        "source": "本网站仅作为项目的演示网站!",
        "username": "112",
        "comment": "123",
        "published": false,
        "createdAt": "2024-12-31T08:13:04.236Z",
        "updatedAt": "2024-12-31T08:13:04.236Z",
        "__v": 0
      }
    ]);
  }, [postId]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(signal).catch((err)=>{
      if(err.name !== "AbortError") {
        console.error(err);
      }else {
        //console.log("取消请求");
      };
    });
    return () => {
      controller.abort();
      setIsCommentChange(false);
    };
  }, [postId, isCommentChange, setIsCommentChange, fetchData]);

  return comments !== null ? (
    <div className={styles["comments-box"]}>
      <h3 className={styles["comment-label"]}>{`评论 : `}</h3>
      {comments
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((c) => {
          const commentCreatedDate = new Date(c.createdAt);
          const formatCreated = `${commentCreatedDate.getFullYear()}年${
            commentCreatedDate.getMonth() + 1
          }月${commentCreatedDate.getDate()}日`;
          return (
            <div
              className={`${styles["comment-wrap"]} ${styleAni["fade-in-top"]}`}
              key={c._id}
            >
              <div className={styles["comment-user"]}>{c.username}</div>
              <time className={styles["comment-date"]}>{formatCreated}</time>
              <div className={styles["comment"]}>{c.comment}</div>
            </div>
          );
        })}
    </div>
  ) : (
    <p>loading</p>
  );
}
