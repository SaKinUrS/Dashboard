import { Card, Col, Row, Space, Table, Typography } from 'antd';

export const HomeLayout: React.FC = () => {
    return (
        <div>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Row>
                    <Col>
                        <Card>
                            <div>
                                <div>
                                    <Typography.Text>Total User</Typography.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>Stats</Col>
                </Row>
                <Row>
                    <Table />
                </Row>
            </Space>
        </div>
    );
};
