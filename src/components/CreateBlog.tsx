import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogService } from "../services/BlogService";
import { Blog as BlogItem} from '../types/blog'

export function CreateBlog() {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const onCreate = () => {
      const blog = BlogService.addBlog({
        title: title,
        content: content,
        profileId: 1,
      } as BlogItem);
      setTitle("");
      setContent("");
      navigate("/blog/" + blog.id);
    };
    return (
      <>
        <p>Create Blog</p>
        <div className="mb-3">
          <label htmlFor="formTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="formTitle"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formContent" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="formContent"
            placeholder="Content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </div>
        <div className="mb-3">
          <button onClick={onCreate}>Create</button>
        </div>
      </>
    );
}