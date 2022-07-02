const bodyBG: React.CSSProperties = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/underwater.jpg)`,
  height: "100vh",
};

function BodyAboutUs() {
  return <div style={bodyBG}>Hello</div>;
}

export default BodyAboutUs;
