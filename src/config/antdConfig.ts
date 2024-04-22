import { ThemeConfig } from 'antd';

export const AntdConfig: ThemeConfig = {
    token: {},
    components: {
        Menu: {
            itemMarginInline: 0,
            itemBorderRadius: 0,
            darkItemSelectedBg: 'transparent',
            darkItemSelectedColor: '#fff',
        },
        Layout: {
            headerPadding: 0,
        },
        Input: {
            hoverBg: '#323D4E',
            activeBg: '#323D4E',
            colorBorder: '#cfcfcf1d',
            activeBorderColor: '#cfcfcf1d',
            hoverBorderColor: '#cfcfcf1d',
            borderRadius: 20,
            colorTextPlaceholder: 'rgba(365,365,365,0.6)',
            colorText: '#fff',
            controlHeight: 40,
            paddingInline: 16,
            paddingBlock: 10,
        },
    },
};
