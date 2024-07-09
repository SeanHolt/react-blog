import * as React from "react";
import { Link } from "react-router-dom";
import { BlogService } from "../services/BlogService";
import { useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectPerPage,
  selectTotal,
  setPage,
  useAppDispatch,
} from "../store";
import { useBlogStates } from "./Blog";
import { Blog, BlogPostsProps, RDS } from "../types";
import ReactPaginate from "react-paginate";

/**
 *
 * @param props BlogPostsProps
 * @param perPage number
 * @param currentPage number
 * @param totalBlogs number
 * @param setBlogs RDS<Blog[]>
 * @param setLoading RDS<boolean>
 * @param setError RDS<boolean>
 */
export const retrieveBlogs = (
  props: BlogPostsProps,
  perPage: number,
  currentPage: number,
  totalBlogs: number = 15,
  setBlogs: RDS<Blog[]>,
  setLoading: RDS<boolean>,
  setError: RDS<boolean>
) => {
  if (props.author && props.author !== null) {
    BlogService.getByProfileId(parseInt(props.author), currentPage, perPage)
      .then((response: Blog[]) => {
        setBlogs(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log("profileId error = ", error);
        setError(true);
        setLoading(false);
      });
  } else {
    if (props.id && props.id !== null) {
      BlogService.getOne(props.id)
        .then((response: Blog[]) => {
          setBlogs(response);
          setLoading(false);
        })
        .catch((error) => {
          console.log("getOne error : ", error);
          setLoading(false);
          setError(true);
        });
    } else {
      BlogService.getAll(perPage, currentPage)
        .then((response: Blog[]) => {
          setBlogs(response);
          setLoading(false);
        })
        .catch((error) => {
          console.log("getAll error = ", error);
          setError(true);
          setLoading(false);
        });
    }
  }
};

export function BlogPosts(props: BlogPostsProps) {
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const total = useSelector(selectTotal);
  const dispatch = useAppDispatch();
  const { blogs, setBlogs, loading, setLoading, error, setError } =
    useBlogStates();

  BlogService.getBlogCount();
  React.useEffect(() => {
    retrieveBlogs(
      props,
      perPage,
      currentPage,
      total,
      setBlogs,
      setLoading,
      setError
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, perPage, currentPage]);
  const pages = Math.ceil(total / perPage);
  const handlePageClick = (event: { selected: number }) => {
    dispatch(setPage(event.selected + 1));
  };
  const hrefBuilder = () => {};
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1 className="error">ERROR FOUND!</h1>
      ) : (
        <>
          {blogs.map((blog: Blog) => (
            <div key={blog.id} className="card mb-2">
              <div className="blog-post card-body">
                <div className="row">
                  <div className="col-6 blog-title card-text">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </div>
                  <div className="col-6 blog-author card-text">
                    By{" "}
                    <Link to={`/author/${blog.profile?.id}`}>
                      {blog.profile?.name || "error"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ReactPaginate
            pageCount={pages}
            hrefBuilder={hrefBuilder}
            onPageChange={handlePageClick}
            className="pagination"
            activeLinkClassName="page-link"
            activeClassName="page-item"
            nextClassName="page-item"
            previousClassName="page-item"
            pageClassName="page-item"
            containerClassName="pagination"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            pageLinkClassName="page-link"
          />
        </>
      )}
    </>
  );
}
