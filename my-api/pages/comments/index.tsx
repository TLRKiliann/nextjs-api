import { useState } from 'react'

const CommentsPage = () => {

  const [comments, setComments] = useState<Array<string>>([])
  const [comment, setComment] = useState<string>("")
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.prevent.default()
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({comment}),
      headers: {
        "Content-Type":"application/json"
      }
    })
    const data = await response.json()
  }

  const handleComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    setComments(data)
  }
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, comment)}>
        <input type='text' value={comment} onChange={(event) => handleChange(event)} />
        <button type='submit'>Enter</button>
      </form>
      <button type='button' onClick={handleComments}>Load Comments</button>
      {comments.map((comment: any) => (
        <p key={comment.id}>{comment.id} {comment.text}</p>
        ))}
    </div>
  )
}

export default CommentsPage
