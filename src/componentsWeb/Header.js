import { SettingOutlined } from "@ant-design/icons";
import { Image, Layout } from "antd";
import logo from "../../assets/logo.png";
import "./styles/Header.css";

export const Header = () => {
  return (
    <Layout.Header className="Header">
      <Image src={logo} preview={false} />
      <SettingOutlined className="logo"/>
    </Layout.Header>
  );
};
