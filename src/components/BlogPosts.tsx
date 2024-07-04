import * as React from 'react'
import { Link } from 'react-router-dom';
import BlogService from '../services/BlogService'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { Pagination } from './Pagination';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectPerPage } from '../store';

export type Blog = {
    id: number;
    title: string;
    author: number;
    content: string;
    profile?: {
        id: number;
        name: string
    }
}
export type BlogProps = {
    id?: string;
    author?: string;
}
export const retrieveBlogs = (
    props: BlogProps,
    perPage: number,
    currentPage: number,
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    if (props.author && props.author !== null) {
        BlogService.getByProfileId(props.author).then((response: any) => {
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
            BlogService.getAll(perPage, currentPage).then((response: any) => {
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
    const [ blogs, setBlogs] = React.useState<Blog[]>([])
    const [ loading, setLoading] = React.useState<boolean>(true)
    const [ error, setError ] = React.useState<boolean>(false)

    React.useEffect(() => {
        console.log('currentPage = ', currentPage, perPage)
        retrieveBlogs(props, perPage, currentPage, setBlogs, setLoading, setError)
    }, [props, perPage, currentPage])
    return (
        <>
            { loading ? <h1>Loading...</h1> : error ? <h1 className="error">ERROR FOUND!</h1> : 
            <>
                {blogs.map((blog: Blog) => (
                <div key={blog.id}>
                    <div className="blog-post mt-22">
                        <div className="blog-title"><h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3></div>
                        <div className="blog-author"><Link to={`/author/${blog.profile?.id}`}>{blog.profile?.name}</Link></div>
                    </div>
                </div>
            ))}
            <Pagination baseUrl="/" start={currentPage || 0} perPage={perPage || 10} total={blogs.length / (perPage || 10)} />
            </>
            }
        </>
    )
}
