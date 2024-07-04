
type CommentProps = {
    id: number;
}
export function Comments(props: CommentProps) {
    console.log('props = ', props)
    return <p>Comments</p>
}