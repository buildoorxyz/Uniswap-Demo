import { Typography } from "antd";

const MainHeading = ({ heading }) => (
  <Typography.Title
    level={2}
    style={{
      color: "white",
      fontWeight: "400",
      fontFamily: "Space Grotesk, sans-serif",
    }}
  >
    {heading}
  </Typography.Title>
);

export default MainHeading;
