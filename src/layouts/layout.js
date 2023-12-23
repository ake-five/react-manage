import React, { useEffect, useState } from "react";
import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';
import { Outlet,useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
const items = [
    getItem('首页', 'layout/home', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
  ];
export default function Index() {
    // const { REACT_APP_PUBLIC_PATH } = (process?.env as any)
    // console.log(process.env);

    // const BADE_NAME = REACT_APP_PUBLIC_PATH ? `/${REACT_APP_PUBLIC_PATH}` : ``

    const naviagtor = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const onClick = (e) => {
        if (e.key) {
            naviagtor(`/${e.key}`);
        }
    };
    useEffect(() => {
        // dispatch({
        //     type: IMenuActionType.INIT,
        // });
    }, []);

    return (
        <Layout style={{ height: '100%' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >


                {<Menu
                    theme="dark"
                    defaultSelectedKeys={['layout/coms']}
                    defaultOpenKeys={['layout/coms']}
                    mode="inline"
                    items={items}
                    onClick={onClick}
                />}
            
 
            </Sider>
            <Layout className="site-layout" style={{ height: "100%" }}>
                {/* <Header /> */}
                <Content style={{ margin: "16px",height: "100%" }}>
                    <div
                        className="site-layout-background"
                        style={{ height: "100%" }}
                    >
                        {/* <Spin delay={500}> */}
                            <Outlet />
                        {/* </Spin> */}
                    </div>
                </Content>

            </Layout>
        </Layout>
    );
}
