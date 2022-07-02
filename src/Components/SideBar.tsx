const SideBarStyle: React.CSSProperties = {
  border: "1px solid white",
  position: "absolute",
  left: "50px",
  top: "50%",
  transform: "translateY(-50%)",
  height: "450px",
  color: "white",
};

function SideBar() {
  return <div style={SideBarStyle}>WORK SideBar HERE</div>;
}

export default SideBar;
