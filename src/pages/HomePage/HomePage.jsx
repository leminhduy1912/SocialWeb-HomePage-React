import { Grid } from "@mui/material";

// import { useNavigate } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import Reels from "../../components/Reel/Reels";

import CreateReelForm from "../../components/Reel/CreateReelForm";
import Profile from "../Profile/Profile";
import HomeRight from "../../components/HomeRight/HomeRight";
import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="px-6">
      {/* sidebar */}
      <Grid container spacing={0}>
        <Grid item xs={0} lg={2}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        {/* main */}
        <Grid
          lg={location.pathname === "/" ? 7 : 9}
          item
          className="px-5 justify-center"
          xs={9}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reel" element={<CreateReelForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>

        <Grid item xs={0} lg={3} className="relative">
          <div className="sticky top-0 w-full">
            <HomeRight />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
