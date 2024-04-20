import { Layout, Spin } from 'antd';

export const LoadingPage = () => {
    return (
        <Layout style={{ minHeight: '100vh', justifyContent: 'center' }}>
            <Spin size="large" />
        </Layout>
    );
};
