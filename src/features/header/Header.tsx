import { Col, Row, Typography } from 'antd';
import { FC } from 'react';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <Row>
            <Col>asd</Col>
            <Col>
                <Row>
                    <Col>notif</Col>
                    <Col>
                        <img src="" alt="ava" />
                        <div className={styles.userInfo}>
                            <Typography.Text color="#fff" strong>
                                Moni Roy
                            </Typography.Text>
                            <Typography.Text color="#fff">Admin</Typography.Text>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
