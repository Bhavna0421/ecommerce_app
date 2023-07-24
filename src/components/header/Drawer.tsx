import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Divider, Drawer, IconButton, List } from "@mui/material";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onCartIconClick?: () => void;
  oncartClick?: () => void;
  onCloseIcon?: () => void;
}

const CustomDrawer = ({ children, isOpen, onCloseIcon }: Props) => {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onCloseIcon}
      transitionDuration={700}
      PaperProps={{
        style: {
          width: 380,
          boxShadow: isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : "none",
        },
      }}
    >
      <aside style={{ height: "full", overflowY: "auto" }}>
        <div style={{ backgroundColor: "#1E1E1E", height: 75 }}>
          <List>
            <IconButton
              onClick={onCloseIcon}
              style={{ float: "right", margin: "10px 18px 0px 0px" }}
            >
              <CloseOutlinedIcon
                style={{ color: "white", fontSize: "1.3rem" }}
              />
            </IconButton>
          </List>
        </div>
        <Divider />
        <main
          style={{ backgroundColor: "white", padding: "4px", color: "black" }}
        >
          {children}
        </main>
      </aside>
    </Drawer>
  );
};

export default CustomDrawer;
