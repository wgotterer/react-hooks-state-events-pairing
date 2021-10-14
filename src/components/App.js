import video from "../data/video.js";
import VideoHeader from "./VideoHeader.js";
import Button from "./Button.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoHeader title={video.title} url={video.embedUrl} views={video.views} createdAt={video.createdAt}/>
      <Button upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments comments={video.comments} />
      
      
      
    </div>
  );
}

export default App;
