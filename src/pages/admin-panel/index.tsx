import React, { useState } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IRoute } from "shared/routes/types";
import { Switch } from "react-router";
import { NavLink } from "react-router-dom";
import paths from "shared/routes/paths";
import RouteWithSubRoutes from "../../shared/routes/RouteWithSubRoutes";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminPanelPage: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (value: boolean) => {
    setCollapsed(value);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Категории
            <NavLink to={paths.admin.categories} />
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            Пользователи
            <NavLink to={paths.admin.users} />
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Switch>
              {routes.map((route) => (
                <RouteWithSubRoutes key={route.path} {...route} />
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Baza ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminPanelPage;
