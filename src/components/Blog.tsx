import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { selectCurrentPage, selectPerPage } from "../store"
import { retrieveBlogs, Blog as BlogItem } from "./BlogPosts"
import { Comments } from "./Comments"

export function Blog() {
  let params = useParams()
  const currentPage = useSelector(selectCurrentPage)
  const perPage = useSelector(selectPerPage)
  const [ blogs, setBlogs] = React.useState<BlogItem[]>([])
  const [ loading, setLoading] = React.useState<boolean>(true)
  const [ error, setError ] = React.useState<boolean>(false)

  useEffect(() => {
    retrieveBlogs(params, perPage, currentPage, setBlogs, setLoading, setError)
  }, [params, perPage, currentPage])
  const blog = blogs[0]
  console.log('blog = ', blog)
  return (
    <>
      {!loading && !error ? 
        <div key={blog.id}>
            <div className="blog-post mt-22">
                <div className="blog-title"><h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3></div>
                { !Array.isArray(blog.profile) ? <div className="blog-author"><Link to={`/author/${blog.profile?.id}`}>{blog.profile?.name}</Link></div> : <p className="error">Error</p>}
                <div className="blog-content">{blog.content}</div>
            </div>
            <Comments />
          </div>
    : null}
    </>
  )
}
  