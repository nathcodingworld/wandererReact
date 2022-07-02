const bodyBG: React.CSSProperties = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/forest.png)`,
  height: "300vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function BodyFavorites() {
  return <div style={bodyBG}>Hello</div>;
}

export default BodyFavorites;
