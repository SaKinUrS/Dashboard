import React, { useRef } from 'react';

import { Input, Tooltip, TooltipProps } from 'antd';
import { InputProps } from 'antd/es/input';

import styles from './Input.module.scss';

type TooltipedInputPropsType = InputProps & {
    tooltipTitle?: string;
    tooltipProps?: TooltipProps;
};

export const TooltipedInput: React.FC<TooltipedInputPropsType> = ({ tooltipProps, ...props }) => {
    const ref = useRef(null);

    return (
        <Tooltip {...tooltipProps}>
            <Input {...props} ref={ref} className={styles.input} />
        </Tooltip>
    );
};
