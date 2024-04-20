import { LoadingPage } from '@pages/loading';
import { ConfigProvider } from 'antd';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AntdConfig } from './config/antdConfig';
import { router } from './router';
import './styles/index.scss';

function App() {
    const [count, setCount] = useState(0);
    return (
        <ConfigProvider theme={AntdConfig}>
            <Suspense fallback={<LoadingPage />}>
                <RouterProvider router={router} />
            </Suspense>
        </ConfigProvider>
    );
}

export default App;
