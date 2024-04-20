import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Permission } from '@enums/permisson';
import { Routes } from '@enums/routes';
import { LoadingLayout } from '@features/layout/loading';
import { validatePermissions } from '@utils/authentication';

import { useGetCurrentUser } from './useGetCurrentUser';

type PropsType = {
    children: React.ReactElement;
    redirectPath?: Routes;
};

export const ProtectedRoute: React.FC<PropsType> = ({ children, redirectPath = Routes.Login }): React.ReactElement => {
    const { isLoading, user, userPermissions } = useGetCurrentUser();

    if (isLoading) {
        return <LoadingLayout />;
    }

    const isAccessGranted = validatePermissions({
        user,
        userPermissions,
    });

    if (!isAccessGranted) {
        return <Navigate to={redirectPath} replace />;
    }

    return children || <Outlet />;
};
