import React from 'react'

function VideoHeader(props) {
    console.log(props)
    return (
        <div>
             <iframe
        width="919"
        height="525"
        src={props.url}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> 
      <h1>{props.title}</h1>
      <p>Views: {props.views} | Uploaded {props.createdAt}</p>
      
        </div>
    )
}

export default VideoHeader;