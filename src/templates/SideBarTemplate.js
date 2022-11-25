import { Drawer } from "antd";

const SideBarTemplate = ({ innerContent, ...drawerProps }) => (
  <Drawer {...drawerProps}>{innerContent}</Drawer>
);

export default SideBarTemplate;
