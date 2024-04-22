import { SVGProps } from 'react';

type IconProps = SVGProps<any>;

export const UserIcon: React.FC<IconProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.01" width="24" height="24" fill="black" />
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="white" />
            <path
                d="M18 21C18.5523 21 19 20.5523 19 20C19 16.134 15.866 13 12 13C8.13401 13 5 16.134 5 20C5 20.5523 5.44772 21 6 21H18Z"
                fill="white"
            />
        </svg>
    );
};
