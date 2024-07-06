import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCurrentPage, selectPerPage } from "../store";
import { retrieveBlogs, Blog as BlogItem, RDS } from "./BlogPosts";
import { Comments } from "./Comments";

export type UseBlogStatesType = {
  blogs: BlogItem[];
  setBlogs: RDS<BlogItem[]>;
  loading: boolean;
  setLoading: RDS<boolean>;
  error: boolean;
  setError: RDS<boolean>;
};
export function useBlogStates(): UseBlogStatesType {
  const [blogs, setBlogs] = React.useState<BlogItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  return { blogs, setBlogs, loading, setLoading, error, setError };
}
export function Blog() {
  let params = useParams();
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const { blogs, setBlogs, loading, setLoading, error, setError } =
    useBlogStates();

  useEffect(() => {
    retrieveBlogs(
      params,
      perPage,
      currentPage,
      15,
      setBlogs,
      setLoading,
      setError
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const blog = blogs[0];
  return (
    <>
      {!loading && !error ? (
        <div key={blog.id}>
          <div className="blog-post mt-22">
            <div className="blog-title">
              <h3>{blog.title}</h3>
            </div>
            {blog.profile ? (
              <div className="blog-author">
                By{" "}
                <Link to={`/author/${blog.profile?.id}`}>
                  {blog.profile?.name}
                </Link>
              </div>
            ) : (
              <p className="error">Error</p>
            )}
            <div className="blog-content">{blog.content}</div>
          </div>
          <Comments />
        </div>
      ) : null}
    </>
  );
}
