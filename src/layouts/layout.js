import React, { useEffect, useState } from "react";
import { Outlet,  } from "react-router-dom";
import { Layout, Menu,  Spin } from "antd";
const { Content,  Sider } = Layout;


export default function Index() {
    // const { REACT_APP_PUBLIC_PATH } = (process?.env as any)
    // console.log(process.env);

    // const BADE_NAME = REACT_APP_PUBLIC_PATH ? `/${REACT_APP_PUBLIC_PATH}` : ``

    // const naviagtor = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const onClick = (e) => {
        if (e.key) {
            // naviagtor(`/${e.key}`);
        }
    };
    useEffect(() => {
        // dispatch({
        //     type: IMenuActionType.INIT,
        // });
    }, []);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                {collapsed ? (
                    <div className="layout-container">React.vite</div>
                ) : (
                    <div className="layout-container">
                        欢迎登录 React.vite 练习项目
                    </div>
                )}

                { <Menu
                    theme="dark"
                    defaultSelectedKeys={['layout/coms']}
                    defaultOpenKeys={['layout/coms']}
                    mode="inline"
                    items={[]}
                    onClick={onClick}
                />}
            </Sider>
            <Layout className="site-layout">
                {/* <Header /> */}
                <Content style={{ margin: "16px" }}>
                    <div
                        className="site-layout-background"
                        style={{ height: "100%" }}
                    >
                        <Spin delay={500}>
                            <Outlet />
                        </Spin>
                    </div>
                </Content>
           
            </Layout>
        </Layout>
    );
}
