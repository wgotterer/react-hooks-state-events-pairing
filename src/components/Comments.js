import React, {useState} from 'react'

function Comments(props) {
    const [hideComments, setHideComments] = useState(false)

    const onClick = () => setHideComments(!hideComments) 
   
            

    

    const vidComments = props.comments.map((comment) => {

        return (
           <>
            <div>{comment.user}</div>
            <div>{comment.comment}</div>
            </>

        )
    })

    return (
        <>
            <button onClick={onClick}>{hideComments ? "show comment" : "hide comments"} </button>
            <h2>2 comments</h2>
            <div>{hideComments ? null : vidComments}</div>
        </>
    )
}
export default Comments;