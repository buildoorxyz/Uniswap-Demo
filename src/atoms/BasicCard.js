import { Card } from "antd";

const BasicCard = ({ innerContent, ...cardProps }) => (
  <Card {...cardProps}>{innerContent} </Card>
);

export default BasicCard;
