import { DashboardLayout } from '@features/layout';
import { createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../enums/appRoutes';

export const router = createBrowserRouter([
    {
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                path: AppRoutes.Home,
                element: <div>Home</div>,
            },
        ],
    },
]);
