import {FC} from 'react';
import {Col, Row} from 'antd';
import {FileSearch, FileList} from '../components';
import defaultFiles from '../utils/defaultFiles';
import './index.css';

const Index: FC<any> = () => {
  // ------------------------------------------------------------------------------------------------------------------------

  const onFileSearch = (e: string) => {
    console.log('onFileSearch', e);
  };

  const onFileClick = (id: string) => {
    console.log('onFileClick', id);
  };

  const onFileDelete = (id: string) => {
    console.log('onFileDelete', id);
  };

  const onSaveEdit = (id: string, value: string) => {
    console.log('onSaveEdit', id, value);
  };

  // ------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <Row>
        <Col span={6}>
          <div className='left'>
            <div className='left-container'>
              <FileSearch onFileSearch={onFileSearch} />
              <FileList
                files={defaultFiles}
                onFileClick={onFileClick}
                onFileDelete={onFileDelete}
                onSaveEdit={onSaveEdit}
              />
            </div>
          </div>
        </Col>
        <Col style={{background: 'blue'}} span={18}>
          right
        </Col>
      </Row>
    </div>
  );
};

export default Index;
