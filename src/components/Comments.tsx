import { useEffect, useState } from "react";
import { BlogService, Comment } from "../services/BlogService";
import { useParams } from "react-router-dom";

export function Comments() {
  const props = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    if (props && props.id) {
      BlogService.getCommentsByBlog(parseInt(props.id)).then(
        (response: Comment[]) => {
          setComments(response);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h4 className="mt-4">Comments</h4>
      {comments.map((comm: Comment) => (
        <div key={comm.id} className="card w-100">
          <div className="d-flex p-2">
            <div className="card-text flex-fill">{comm.title}</div>
            <div className="card-text flex-fill">{comm.profile?.name}</div>
          </div>
        </div>
      ))}
    </>
  );
}
