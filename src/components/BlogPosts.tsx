import * as React from 'react'
import { Link } from 'react-router-dom';
import BlogService from '../services/BlogService'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { Pagination } from './Pagination';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectPerPage } from '../store';
import { useBlogStates } from './Blog';

export type Blog = {
    id: number;
    title: string;
    content: string;
    profileId: number;
    profile?: {
        id?: number;
        name?: string
    }
}
export type BlogProps = {
    id?: string;
    author?: string;
}
export type RDS<T> = React.Dispatch<React.SetStateAction<T>>

export const retrieveBlogs = (
    props: BlogProps,
    perPage: number,
    currentPage: number,
    totalBlogs: number = 15,
    setBlogs: RDS<Blog[]>,
    setLoading: RDS<boolean>,
    setError: RDS<boolean>,
) => {
    if (props.author && props.author !== null) {
        BlogService.getByProfileId(parseInt(props.author)).then((response: any) => {
            setBlogs(response)
            setLoading(false)
        }).catch(error => {
            console.log('profileId error = ', error)
            setError(true)
            setLoading(false)
        })
    } else {
        if (props.id && props.id !== null) {
            BlogService.getOne(props.id).then((response: any) => {
                setBlogs(response)
                setLoading(false)
            }).catch(error => {
                console.log('getOne error : ', error)
                setLoading(false)
                setError(true)
            })
        } else {
            BlogService.getAll(perPage, currentPage, totalBlogs).then((response: any) => {
                setBlogs(response)
                setLoading(false)
            }).catch(error => {
                console.log('getAll error = ', error)
                setError(true)
                setLoading(false)
            })
        }
    }
}

export function BlogPosts(props: BlogProps) {
    const currentPage = useSelector(selectCurrentPage)
    const perPage = useSelector(selectPerPage)
    const { blogs, setBlogs, loading, setLoading, error, setError } = useBlogStates()
    
    React.useEffect(() => {
        retrieveBlogs(props, perPage, currentPage, 15, setBlogs, setLoading, setError)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props, perPage, currentPage])
    return (
        <>
            { loading ? <h1>Loading...</h1> : error ? <h1 className="error">ERROR FOUND!</h1> : 
            <>
                {blogs.map((blog: Blog) => (
                <div key={blog.id} className="card mb-2">
                    <div className="blog-post card-body">
                        <div className="row">
                            <div className="col-6 blog-title card-text"><Link to={`/blog/${blog.id}`}>{blog.title}</Link></div>
                            <div className="col-6 blog-author card-text">By <Link to={`/author/${blog.profile?.id}`}>{blog.profile?.name || "error"}</Link></div>
                        </div>
                    </div>
                </div>
            ))}
            <Pagination baseUrl="/" start={currentPage || 0} perPage={perPage || 10} total={blogs.length / (perPage || 10)} />
            </>
            }
        </>
    )
}
