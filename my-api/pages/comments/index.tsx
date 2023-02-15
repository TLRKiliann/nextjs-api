import { useEffect, useState } from 'react'

const CommentsPage = () => {

  const [comments, setComments] = useState<Array<string>>([])
  const [comment, setComment] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>, comment: string) => {
    console.log(comment, "comment")
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ comment }),
    })
    const data = await response.json()
    setComment("")
  }

  const handleComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    setComments(data)
  }

  const handleDelete = async (commentId: number): void => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    handleComments()
  }

  return (
    <div>
      <input type='text' value={comment} onChange={(event) => handleChange(event)} />
      <button type='button' onClick={(event) => handleSubmit(event, comment)}>
        Enter
      </button>
      <button type='button' onClick={handleComments}>
        Load Comments
      </button>
      {comments.map((comment: any) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
          <button type="button" onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default CommentsPage
