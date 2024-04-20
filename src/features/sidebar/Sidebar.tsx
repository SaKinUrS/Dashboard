import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { SidebarTrigger } from '@icons/sidebarTrigger';
import { Menu, MenuProps } from 'antd';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
interface ISidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Dashboard', 'sub1', <MailOutlined />),
    getItem('Products', 'sub2', <AppstoreOutlined />),
    getItem('Favorites', 'sub3', <SettingOutlined />),
    getItem('Inbox', 'sub4', <SettingOutlined />),
    getItem('Order Lists', 'sub5', <SettingOutlined />),
    getItem('Product Stock', 'sub6', <SettingOutlined />),
];
export const Sidebar: FC<ISidebarProps> = ({ collapsed, setCollapsed }) => {
    return (
        <>
            <button className={styles.trigger} onClick={() => setCollapsed(!collapsed)}>
                <SidebarTrigger />
            </button>
            <Menu mode="inline" className={styles.menu} theme={'dark'} items={items} />
        </>
    );
};
