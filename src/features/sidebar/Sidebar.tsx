import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { CalendarIcon } from '@icons/CalendarIcon';
import { CardIcon } from '@icons/CardIcon';
import { ChartsIcon } from '@icons/ChartsIcon';
import { ChatIcon } from '@icons/ChatIcon';
import { CubeIcon } from '@icons/CubeIcon';
import { DashIcon } from '@icons/DashIcon';
import { DocumentIcon } from '@icons/DocumentIcon';
import { HeartIcon } from '@icons/HeartIcon';
import { LayoutIcon } from '@icons/LayoutIcon';
import { ListIcon } from '@icons/ListIcon';
import { LoginIcon } from '@icons/LoginIcon';
import { PeopleIcon } from '@icons/PeopleIcon';
import { SettingsIcon } from '@icons/SettingsIcon';
import { StockIcon } from '@icons/StockIcon';
import { UserIcon } from '@icons/UserIcon';
import { SidebarTrigger } from '@icons/sidebarTrigger';
import { Menu, MenuProps, Space } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
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
    getItem(<Link to={'/'}>Dashboard</Link>, 'sub1', <DashIcon />),
    getItem(<Link to={'/'}>Products</Link>, 'sub2', <CubeIcon />),
    getItem(<Link to={'/'}>Favorites</Link>, 'sub3', <HeartIcon />),
    getItem(<Link to={'/'}>Inbox</Link>, 'sub4', <ChatIcon />),
    getItem(<Link to={'/'}>Order Lists</Link>, 'sub5', <LayoutIcon />),
    getItem(<Link to={'/'}>Product Stock</Link>, 'sub6', <StockIcon />),
    getItem(<Link to={'/'}>Pricing</Link>, 'sub7', <DocumentIcon />),
    getItem(<Link to={'/'}>Calender</Link>, 'sub8', <CalendarIcon />),
    getItem(<Link to={'/'}>To-Do</Link>, 'sub9', <ListIcon />),
    getItem(<Link to={'/'}>Contact</Link>, 'sub10', <PeopleIcon />),
    getItem(<Link to={'/'}>Invoice</Link>, 'sub11', <CardIcon />),
    getItem(<Link to={'/'}>UI Elements</Link>, 'sub12', <ChartsIcon />),
    getItem(<Link to={'/'}>Team</Link>, 'sub13', <UserIcon />),
    getItem(<Link to={'/'}>Settings</Link>, 'sub14', <SettingsIcon />),
    getItem(<button onClick={() => console.log('Logout')}>Logout</button>, 'sub15', <LoginIcon />),
];
export const Sidebar: FC<ISidebarProps> = ({ collapsed, setCollapsed }) => {
    const menuItems = items.map(item => {
        return collapsed
            ? item
            : {
                  ...item,
                  icon: undefined,
              };
    }) as MenuItem[];

    return (
        <div className={styles.sidebar}>
            <button className={styles.trigger} onClick={() => setCollapsed(!collapsed)}>
                <SidebarTrigger />
            </button>
            <Menu mode="inline" className={styles.menu} theme={'dark'} items={menuItems} />
        </div>
    );
};
