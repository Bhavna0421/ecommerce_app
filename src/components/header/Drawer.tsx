import { Drawer, IconButton, List, Divider } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onCartIconClick: () => void;
}

const CustomDrawer = ({ children, isOpen, onCartIconClick }: Props) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onCartIconClick}
      transitionDuration={700}
      PaperProps={{
        style: {
          width: 380,
          boxShadow: isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : "none",
        },
      }}
    >
      <aside className="h-full overflow-y-auto">
        <div style={{ backgroundColor: "#1E1E1E", height: 75 }}>
          <List>
            <IconButton
              onClick={onCartIconClick}
              style={{ float: "right", margin: "10px 18px 0px 0px" }}
            >
              <CloseOutlinedIcon
                style={{ color: "white", fontSize: "1.3rem" }}
              />
            </IconButton>
          </List>
        </div>
        <Divider />
        <main className="bg-white p-4 text-black">{children}</main>
      </aside>
    </Drawer>
  );
};

export default CustomDrawer;
