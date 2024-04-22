import { SearchOutlined } from '@ant-design/icons';
import { TooltipedInput } from '@features/ui-kit';
import { NotificationIcon } from '@icons/NotificationIcon';
import { Badge, Col, Row, Typography } from 'antd';
import { FC } from 'react';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <Row className={styles.header} justify={'space-between'} align={'middle'}>
            <Col>
                <TooltipedInput placeholder="Search" prefix={<SearchOutlined />} />
            </Col>
            <Col>
                <Row align={'middle'} className={styles.headerRight}>
                    <Badge count={5}>
                        <NotificationIcon />
                    </Badge>
                    <div className={styles.userWrapper}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObnx0AZNSZ_6fkMN5d-sVDtegtXaOlgqDXo_KX6eSLw&s"
                            alt="ava"
                            className={styles.avatar}
                        />
                        <div className={styles.userInfo}>
                            <Typography.Text className={styles.userName}>Moni Roy</Typography.Text>
                            <Typography.Text className={styles.userRole}>Admin</Typography.Text>
                        </div>
                    </div>
                </Row>
            </Col>
        </Row>
    );
};
