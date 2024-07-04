
class BlogDataService {
    commentsCache: any[] = []
    async getAll(perPage: number = 10, currentPage: number = 1) {
        const url = `http://localhost:3001/blogs?_page=${currentPage}&_limit=${perPage}&_embed=profiles`
        console.log('url = ', url)
        return await fetch(url, { method: "GET"}).then(response => response.json()).then(response => {
            return response
        })
    }
    async getOne(id: string) {
        return await fetch("http://localhost:3001/blogs/" + id + "?_embed=profile", { method: "GET"}).then(response => response.json()).then(response => {
            return [response]
        })
    }
    async getByProfileId(id?: string) {
        return await fetch("http://localhost:3001/blogs?profileId=" + id + "&_embed=profile", { method: "GET"}).then(response => response.json()).then(response => {
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
        return await fetch('http://localhost:3001/comments?blogsId=' + id + '&_embed=profile').then(response => response.json()).then(response => {
            console.log('getCommentsByBlog : ', response)
            this.commentsCache[id] = response
            return response
        })
    }
}
const BlogService = new BlogDataService()
export default BlogService
