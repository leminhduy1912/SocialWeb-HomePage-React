import { Avatar, Card, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "../Post/Post";
const storyCircle = [1, 1, 1, 1, 1, 1];
const posts = [1, 1, 1, 1, 1, 1];
const MiddlePart = () => {
  const handleOpenCreatePostModal = () => {
    console.log("Modal Create Post");
  };
  return (
    <div className="px-20">
      <section className="py-5 flex items-center rounded-b-md">
        <div className="flex flex-col items-center mr-6 cursor-pointer">
          <Avatar sx={{ height: "5rem", width: "5rem" }}>
            <AddIcon sx={{ fontSize: "2rem" }} />
          </Avatar>
          <p>Add New</p>
        </div>
        {storyCircle.map((item, index) => {
          return <StoryCircle key={index} />;
        })}
      </section>

      <Card className="mt-5 p-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            type="text"
            placeholder="How do you feel to day ?"
            className="outline-none w-[90%] bg-slate-300 rounded-full px-5 bg-transparent border-[#3b4054] border"
          />
        </div>

        <div className="flex justify-center space-x-12 mt-5">
          <div className="flex items-center">
            <IconButton color="#3b4054" onClick={handleOpenCreatePostModal}>
              <AddPhotoAlternateIcon />
            </IconButton>
            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="#3b4054" onClick={handleOpenCreatePostModal}>
              <VideoCallIcon />
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="#3b4054" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>Write Article</span>
          </div>
        </div>
      </Card>
      <div className="mt-10 space-y-5">
        {posts.map((index) => {
          return <Post key={index} />;
        })}
      </div>
    </div>
  );
};

export default MiddlePart;
