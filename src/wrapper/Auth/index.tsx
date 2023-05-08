import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, MenuProps, theme } from "antd";
import { ROUTES } from "~/routes";
import styles from "./styles.module.scss";
import {
  TabletOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Content, Footer } from "antd/es/layout/layout";
import history from "~/utils/history";
import { RootState, useAppSelector } from "~/store";
import TopHeader from "~/components/molecules/Header";
import Svg from "~/components/atoms/Svg";

type MenuItem = Required<MenuProps>["items"][number];
interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

function Auth(props: Props) {
  const { children = null } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { pathname } = useLocation();
  const menuTop: MenuItem[] = useMemo(
    () => [
      {
        key: ROUTES.Iphone,
        label: <Link to={ROUTES.Iphone}>Điện thoại</Link>,
        icon: <MobileOutlined style={{fontSize: 18}} />,
        url: ROUTES.Iphone,
        content: "Posts",
      },
      {
        key: ROUTES.Ipad,
        label: <Link to={ROUTES.Ipad}>Ipad</Link>,
        icon: <TabletOutlined style={{fontSize: 18}} />,
        url: ROUTES.Ipad,
        content: "Posts",
      },
    ],
    []
  );

  return (
    <Layout className={styles.layoutContainer}>
      <div className="header">
        <TopHeader menus={menuTop}/>
      </div>
      <Content className={styles.contentMain} style={{ padding: '0 20vw' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ minHeight: '75vh'}}>{children}</div>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Content>
    </Layout>
  );
}

export default Auth;
