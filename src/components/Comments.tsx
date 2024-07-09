import { useEffect, useState } from "react";
import { BlogService } from "../services/BlogService";
import { useParams } from "react-router-dom";
import { CommentType } from "../types";
import { Comment } from "./Comment";

export function Comments() {
  const props = useParams();
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    if (props && props.id) {
      BlogService.getCommentsByBlog(parseInt(props.id)).then(
        (response: CommentType[]) => {
          setComments(response);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return (
    <>
      {comments && comments.length > 0 ? (
        <>
          <h4 className="mt-4">Comments</h4>
          {comments.map((comm: CommentType) => (
            <div key={comm.id}>
              <Comment comment={comm} />
            </div>
          ))}
        </>
      ) : null}
    </>
  );
}
