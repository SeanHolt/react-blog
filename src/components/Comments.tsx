import { useEffect, useState } from "react";
import BlogService from "../services/BlogService";
import { useParams } from "react-router-dom";

type CommentItem = {
    id: number;
    title: string;
    profilesId: number;
    blogsId: number;
    profile: [];
}
export function Comments() {
    const props = useParams()
    const [ comments, setComments ] = useState<CommentItem[]>([])
    useEffect(() => {
        if (props && props.id) {
            BlogService.getCommentsByBlog(parseInt(props.id)).then((response: CommentItem[]) => {
                setComments(response)
            })
        }
    }, [])
    return (<>
        <p>Comments</p>
        {comments.map((comm: CommentItem) => (
                <p>{comm.title}</p>
            )
        )}
    </>)
}