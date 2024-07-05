import { BlogItem } from "../components"

class BlogDataService {
    commentsCache: any[] = []
    blogCache: any[] = []
    allBlogCache: BlogItem[][] = []
    async getAll(perPage: number = 10, currentPage: number = 1) {
        if (this.allBlogCache[currentPage] && this.allBlogCache[currentPage][perPage]) return this.allBlogCache[currentPage][perPage]
        const url = `http://localhost:3001/blogs?_page=${currentPage}&_limit=${perPage}&_expand=profile`
        return await fetch(url, { method: "GET"}).then(response => response.json()).then(response => {
            if (!Array.isArray(this.allBlogCache[currentPage]))
                this.allBlogCache[currentPage] = []
            this.allBlogCache[currentPage][perPage] = response
            return response
        })
    }
    async getOne(id: string) {
        if (this.blogCache[parseInt(id)]) return [this.blogCache[parseInt(id)]]
        return await fetch("http://localhost:3001/blogs/" + id + "?_embed=profile", { method: "GET"}).then(response => response.json()).then(response => {
            this.blogCache[parseInt(id)] = response
            return [response]
        })
    }
    async getByProfileById(id?: string, perPage: number = 10, currentPage: number = 1) {
        return await fetch(`http://localhost:3001/blogs?profileId=${id}&_expand=profile&_page=${currentPage}&_limit=${perPage}`, { method: "GET"}).then(response => response.json()).then(response => {
            return response
        })
    }
    async getProfiles() {
        return await fetch('http://localhost:3001/profiles').then(response => response.json()).then(response => response);
    }
    async getCommentsByBlog(id: number) {
        if (this.commentsCache[id] && Array.isArray(this.commentsCache[id])) {
            return this.commentsCache[id]
        }
        return await fetch(`http://localhost:3001/comments?blogId=${id}&_expand=profile`).then(response => response.json()).then(response => {
            this.commentsCache[id] = response
            return response
        })
    }
}
const BlogService = new BlogDataService()
export default BlogService
