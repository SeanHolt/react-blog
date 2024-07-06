import { useEffect, useState } from "react";
import { BlogService } from "../services/BlogService";
import { useParams } from "react-router-dom";

type CommentItem = {
  id: number;
  title: string;
  profilesId: number;
  blogsId: number;
  profile?: {
    id: number;
    name: string;
  };
};
export function Comments() {
  const props = useParams();
  const [comments, setComments] = useState<CommentItem[]>([]);
  useEffect(() => {
    if (props && props.id) {
      BlogService.getCommentsByBlog(parseInt(props.id)).then(
        (response: CommentItem[]) => {
          setComments(response);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h4 className="mt-4">Comments</h4>
      {comments.map((comm: CommentItem) => (
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
