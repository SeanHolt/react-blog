import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogService } from "../services/BlogService";

export interface Author {
  id: number;
  name: string;
}
export function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  useEffect(() => {
    BlogService.getProfiles().then((response: Author[]) => {
      setAuthors(response);
    });
  }, []);
  return (
    <>
      <h1>Authors</h1>
      {authors.map((author: Author) => {
        let count = BlogService.getCountByProfile(author.id)
        return (
          <h3 key={author.id}>
            <Link to={"/author/" + author.id} className="item-link">
              {author.name} ({count})
            </Link>
          </h3>
        );
      })}
    </>
  );
}
