import { Header } from '@features/header/Header';
import { Sidebar } from '@features/sidebar/Sidebar';
import { Layout } from 'antd';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

interface IDashboardLayoutProps {}

export const DashboardLayout: FC<IDashboardLayoutProps> = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Layout hasSider style={{ minHeight: '100vh' }}>
            <Layout.Sider
                width={240}
                collapsible
                collapsed={collapsed}
                collapsedWidth={86}
                onCollapse={value => setCollapsed(value)}
                theme="dark"
                trigger={null}
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    zIndex: 401,
                    overflow: 'auto',
                }}
            >
                <Sidebar setCollapsed={setCollapsed} collapsed={collapsed} />
            </Layout.Sider>
            <Layout style={{ marginLeft: 86 }}>
                <Layout.Header
                    style={
                        {
                            // padding: 0,
                            // position: 'sticky',
                            // top: 0,
                            // zIndex: 400,
                            // width: '100%',
                            // lineHeight: '1',
                            // height: 68,
                            // display: 'flex',
                            // alignItems: 'center',
                        }
                    }
                >
                    <Header />
                </Layout.Header>
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};
