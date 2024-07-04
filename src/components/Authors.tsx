import React, { useState } from "react"
import BlogService from "../services/BlogService"
import { Link } from "react-router-dom";

interface Author {
    id: number;
    name: string;
}

export function Authors() {
    const [ authors, setAuthors ] = useState<Author[]>([])

    React.useEffect(() => {
        BlogService.getProfiles().then((response: any) => {
            setAuthors(response)
        })
    })
    return (
        <>
            <h1>Authors</h1>
            {authors.map((author) => {
                return (<h3 key={author.id}><Link to={"/author/" + author.id} className="item-link">{author.name}</Link></h3>)
            })}
        </>
    )
}