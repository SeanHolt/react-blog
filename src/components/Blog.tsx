import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCurrentPage, selectPerPage, setTotal, useAppDispatch } from "../store";
import { retrieveBlogs } from "./BlogPosts";
import { Comments } from "./Comments";
import { UseBlogStatesType, Blog as BlogItem } from "../types";
import parser from "html-react-parser";

export function useBlogStates(): UseBlogStatesType {
  const [blogs, setBlogs] = React.useState<BlogItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  return { blogs, setBlogs, loading, setLoading, error, setError };
}
export function Blog() {
    const dispatch = useAppDispatch();
  let params = useParams();
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const { blogs, setBlogs, loading, setLoading, error, setError } =
    useBlogStates();
    const setTheTotal = (numb: number) => {
        dispatch(setTotal(numb))
    }
  useEffect(() => {
    retrieveBlogs(
      params,
      perPage,
      currentPage,
      setBlogs,
      setLoading,
      setError,
      setTheTotal
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
            <div className="blog-content">{parser(blog.content)}</div>
          </div>
          <Comments />
        </div>
      ) : null}
    </>
  );
}
