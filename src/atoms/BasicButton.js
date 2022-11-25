import { Button } from "antd";

const BasicButton = ({ innerContent, ...props }) => (
  <Button {...props}>{innerContent}</Button>
);

export default BasicButton;
