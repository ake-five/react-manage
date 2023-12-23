import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { BrowserRouter } from "react-router-dom";
import Routes from "../src/router/index";

import './App.css'

const { Header } = Layout;
const items = []
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100%' }}>
      {!window.__POWERED_BY_QIANKUN__ && <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>}

      <BrowserRouter basename='react-manage'>
        <div style={{ height: "100%" }}>
          <Routes />
        </div>
      </BrowserRouter>
    </Layout>
  );
};
export default App;