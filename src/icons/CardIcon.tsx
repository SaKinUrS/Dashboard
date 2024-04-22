import { SVGProps } from 'react';

type IconProps = SVGProps<any>;

export const CardIcon: React.FC<IconProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.01" width="24" height="24" fill="black" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8C2 6.34315 3.34315 5 5 5ZM7 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H7C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15ZM17 15H15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15ZM4 9H20V8C20 7.44772 19.5523 7 19 7H5C4.44772 7 4 7.44772 4 8V9Z"
                fill="white"
            />
        </svg>
    );
};
