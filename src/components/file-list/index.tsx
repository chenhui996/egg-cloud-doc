import {FC, useEffect, useState} from 'react';
import {List, Row, Col, Input} from 'antd';
import {FileMarkdownOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {FileListProps} from '../../type';
import './style.css';

const FileList: FC<FileListProps> = (props) => {
  const {files, onFileClick, onFileDelete, onSaveEdit} = props;
  const [activeItem, setActiveItem] = useState<string | null>(files[0]?.id || null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editVal, setEditVal] = useState<string>('');

  const onItemClick = (id: string) => {
    setActiveItem(id);
    onFileClick && onFileClick(id);
  };

  const onFileEditHandle = () => {
    setEditMode(false);
    onSaveEdit && onSaveEdit(activeItem!, editVal);
  };

  const onFileDeleteHandle = (id: string) => {
    onFileDelete && onFileDelete(id);
  };

  useEffect(() => {
    setEditVal('');
  }, [activeItem]);

  return (
    <div className='file-list'>
      <List
        // size="small"
        dataSource={files}
        split={false}
        rowKey='id'
        renderItem={(item) => {
          return (
            <List.Item
              className={activeItem === item.id ? 'active-file' : ''}
              onClick={() => {
                onItemClick(item.id);
              }}
            >
              <div style={{width: '100%'}}>
                <Row>
                  <Col span={1}>
                    <div className='list-item-icon'>
                      <FileMarkdownOutlined />
                    </div>
                  </Col>
                  <Col span={21}>
                    <div className='file-item-title'>
                      {editMode && activeItem === item.id ? (
                        <Input
                          size='small'
                          value={editVal || item.title}
                          onChange={(e) => setEditVal(e.target.value)}
                          style={{width: '80%'}}
                          onPressEnter={onFileEditHandle}
                        />
                      ) : (
                        <div onClick={() => setEditMode(false)}>
                          <span>{activeItem === item.id ? editVal || item.title : item.title}</span>
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col span={1}>
                    <div className='list-item-icon' onClick={() => setEditMode(true)}>
                      <EditOutlined />
                    </div>
                  </Col>
                  <Col span={1}>
                    <div className='list-item-icon' onClick={() => onFileDeleteHandle(item.id)}>
                      <DeleteOutlined />
                    </div>
                  </Col>
                </Row>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default FileList;
