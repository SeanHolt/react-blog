import React, { useEffect, useState } from "react";
import { CommentType } from "../types/comment";
import { BlogService } from "../services/BlogService";
import { Link } from "react-router-dom";

type CommentProps = {
  id?: string;
  comment?: CommentType;
};
export function Comment(props: CommentProps) {
    const [ comment, setComment ] = useState<CommentType>()
    useEffect(() => {
        if (props.id && !props.comment) {
            BlogService.getCommentById(parseInt(props.id)).then((comment: CommentType) => {
                console.log('comment = ', comment)
                setComment(comment)
            })
        } else {
            setComment(props.comment)
        }
    }, [props])
  return (
    <>
      {comment ? (
        <div key={comment.id} className="card w-100">
          <div className="d-flex p-2">
            <div className="card-text flex-fill">{comment.title}</div>
            <div className="card-text flex-fill">
              {comment?.profile?.name}
            </div>
            <div className="card-text flex-fill"><Link to={"/blog/" + comment.blogId}>To Blog</Link></div>
          </div>
        </div>
      ) : <p>ERROR</p>}
    </>
  );
}
