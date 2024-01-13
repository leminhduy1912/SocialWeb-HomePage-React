// import { useParams } from "react-router-dom";

import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Post from "../../components/Post/Post";
import UserReelCard from "../../components/Reel/UserReelCard";

const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1];
const savedPosts = [1, 1, 1, 1, 1, 1];
const Profile = () => {
  // const { id } = useParams();
  const [value, setValue] = useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="py-10 px-20 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://i.pinimg.com/736x/e5/37/c7/e537c7ea923dfaf7bf357fc8654dc221.jpg"
            alt=""
          />
        </div>

        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-20"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://i.pinimg.com/736x/e5/37/c7/e537c7ea923dfaf7bf357fc8654dc221.jpg"
          />
          <Button sx={{ borderRadius: "20px" }} variant="outlined">
            Edit Profile
          </Button>
        </div>
        <div className="p-5 flex flex-col items-start">
          <p className="py-0.5 font-bold text-xl">Haikyuu</p>
          <p className="opacity-70"> @haikyuu</p>
        </div>

        <div className="py-1 flex justify-start items-center gap-2">
          <span>41 Posts </span>
          <span>35 Followers</span>
          <span>10 Following</span>
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repudiandae labore, vitae saepe at, et delectus alias tempora aut
            sequi rerum. Doloremque non dolorem assumenda accusamus architecto
            voluptatem tempora nisi?
          </p>
        </div>

        <section className="mt-5">
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab value="post" label="POST " />
              <Tab value="reels" label="REELS" />
              <Tab value="saved" label="SAVED" />
              <Tab value="repost" label="REPOST" />
            </Tabs>
          </Box>
          <div className="">
            {value === "post" ? (
              <div className="w-full my-10 space-y-5">
                {posts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-slate-400 rounded-md"
                    >
                      <Post />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {value === "reels" ? (
              <div className="flex gap-2 flex-wrap">
                {reels.map((item, index) => {
                  return <UserReelCard key={index} />;
                })}
              </div>
            ) : (
              ""
            )}
            {value === "saved" ? (
              <div className="w-full my-10 space-y-5">
                {savedPosts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-slate-400 rounded-md"
                    >
                      <Post />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
