import { SVGProps } from 'react';

type IconProps = SVGProps<any>;

export const CubeIcon: React.FC<IconProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.01" width="24" height="24" fill="black" />
            <path d="M11.25 11.83L3 8.35999V16.09C3.00888 16.7482 3.3991 17.3413 4 17.61L11.19 21H11.25V11.83Z" fill="white" />
            <path
                d="M12 10.5L20.51 6.93001C20.3668 6.77089 20.1934 6.64173 20 6.55001L12.8 3.18001C12.2936 2.94032 11.7064 2.94032 11.2 3.18001L3.99999 6.55001C3.80655 6.64173 3.63321 6.77089 3.48999 6.93001L12 10.5Z"
                fill="white"
            />
            <path d="M12.75 11.83V21H12.8L20 17.61C20.5977 17.3428 20.9873 16.7545 21 16.1V8.35999L12.75 11.83Z" fill="white" />
        </svg>
    );
};
