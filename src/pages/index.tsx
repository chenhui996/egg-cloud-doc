import { FC } from 'react';
import { Col, Row } from 'antd';
import { FileSearch } from '../components';
import { FileSearchProps } from '../type';
import './index.css';

const Index: FC<any> = () => {

    // ------------------------------------------------------------------------------------------------------------------------

    const onFileSearch = (e: string) => {
        console.log('onFileSearch', e);
    };

    // ------------------------------------------------------------------------------------------------------------------------

    return <div>
        <Row>
            <Col span={6}>
                <div className="left"><FileSearch onFileSearch={onFileSearch} /></div>
            </Col>
            <Col style={{ background: 'blue' }} span={18}>right</Col>
        </Row>
    </div>
};

export default Index;