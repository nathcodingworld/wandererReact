import BotSlide from "../Components/BotSlide";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

const headBG: React.CSSProperties = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/Philippine.jpg)`,
  position: "relative",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
};

function Head() {
  return (
    <div style={headBG}>
      <NavBar />
      <SideBar />
      <BotSlide />
    </div>
  );
}

export default Head;
