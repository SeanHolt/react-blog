import React, { useEffect, useState } from "react";
import { CommentType } from "../types";
import { BlogService } from "../services/BlogService";
import { Link } from "react-router-dom";

type CommentProps = {
  id?: string;
  comment?: CommentType;
};
export function Comment(props: CommentProps) {
  const [comment, setComment] = useState<CommentType | undefined>(undefined);
  useEffect(() => {
    if (props.id && !props.comment) {
      BlogService.getCommentById(parseInt(props.id)).then(
        (comment: CommentType) => {
          setComment(comment);
        }
      );
    } else {
      setComment(props.comment);
    }
  }, [props]);
  return (
    <>
      {comment ? (
        <div key={comment.id} className="card w-100 mb-3">
          <div className="p-2 row">
            <div className="card-text col">
              <Link to={"/comment/" + comment.id}>{comment.title}</Link>
            </div>
            <div className="card-text col">{comment?.profile?.name}</div>
            {props.comment === undefined ? (
              <div className="card-text col">
                <Link to={"/blog/" + comment.blogId}>To Blog</Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <p>ERROR</p>
      )}
    </>
  );
}
