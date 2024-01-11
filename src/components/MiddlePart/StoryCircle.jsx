import { Avatar } from "@mui/material";

const StoryCircle = () => {
  return (
    <div className="flex flex-col items-center mr-6 cursor-pointer">
      <Avatar
        src="https://i.pinimg.com/originals/70/85/b1/7085b1b6782b4cd1c93a0efb57e05bb9.jpg"
        sx={{ height: "5rem", width: "5rem" }}
      />
      <p>Add New</p>
    </div>
  );
};

export default StoryCircle;
