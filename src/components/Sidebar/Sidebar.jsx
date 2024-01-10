import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="card h-screen flex flex-col py-5 px-4">
      {/* logo */}
      <div className="space-y-8 pl-5 flex justify-start items-center">
        <i className="logo font-bold text-xl text-center">Duy Minh Social</i>
      </div>
      {/* navigation */}
      <div className="flex flex-col gap-y-20 justify-around pt-5">
        <div>
          {navigationMenu.map((item, index) => (
            <div
              key={index}
              className="flex gap-x-4 cursor-pointer items-center justify-start py-4 my-2"
            >
              {React.createElement(item.icon)}{" "}
              {/* Render the icon component dynamically */}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Divider />
        <div className=" flex items-center pt-5 justify-start">
          <div className="flex items-center pr-4">
            <Avatar src="https://i.pinimg.com/736x/e5/37/c7/e537c7ea923dfaf7bf357fc8654dc221.jpg" />
          </div>
          <div>
            <p className="font-bold">Kenma Kozume</p>
            <p className="opacity-70"> @haikyuu</p>
          </div>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <LogoutIcon />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
