import { AuthenticationUser } from '@models/authentication/interfaces';
import { useSelector } from 'react-redux';

type ReturnType = {
    isLoading: boolean;
    user: AuthenticationUser | null;
};

export const useGetCurrentUser = (): ReturnType => {
    const isLoading = useSelector(getAuthLoadingSelector);
    const authenticationUser = useSelector(getCurrentUserSelector);

    return {
        isLoading,
        user: authenticationUser,
    };
};
