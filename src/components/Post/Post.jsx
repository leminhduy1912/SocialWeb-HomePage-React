import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = () => {
  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardMedia
        component="img"
        image="https://th.bing.com/th/id/R.40d038f229278e03943e3e91f4c98124?rik=ZnwZLXX9fE9kqQ&pid=ImgRaw&r=0"
        height="100"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1.2rem" }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            {/* {true ? <FavoriteIcon /> : <FavoriteBorderIcon />} */}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ChatBubbleIcon />
          </IconButton>
        </div>
        <div>
          <BookmarkBorderIcon />
        </div>
      </CardActions>
    </Card>
  );
};

export default Post;
