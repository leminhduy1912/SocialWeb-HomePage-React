import { Card, Grid } from "@mui/material";
import Login from "./Login";
// import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={7.5} className="h-screen overflow-hidden">
          <img
            src="https://th.bing.com/th/id/R.6a67989d232e8b4458113b43b790dd88?rik=6x2hCkByjT0M3g&pid=ImgRaw&r=0"
            alt=""
            className="h-full w-full"
          />
        </Grid>
        <Grid item xs={4.5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1"></div>
              <h1 className="logo text-center">Duy Social</h1>
              <p className="text-center text-sm"> Welcome to us</p>
              <div className="mt-5">
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
