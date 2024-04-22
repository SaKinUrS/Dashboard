import { SVGProps } from 'react';

type IconProps = SVGProps<any>;

export const CalendarIcon: React.FC<IconProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.01" width="24" height="24" fill="black" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 4H18C19.6569 4 21 5.34315 21 7V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V7C3 5.34315 4.34315 4 6 4H7V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4ZM7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16ZM16 17H12C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17ZM5 11H19V7C19 6.44772 18.5523 6 18 6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6H6C5.44772 6 5 6.44772 5 7V11Z"
                fill="white"
            />
        </svg>
    );
};
