import {FC, useState} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import type {GetProps} from 'antd';
import {FileSearchProps} from '../../type';
import './style.css';

const FileSearch: FC<FileSearchProps> = ({onFileSearch}) => {
  const [value, setValue] = useState('');

  // ------------------------------------------------------------------------------------------------------------------------

  const inputProps = {
    // size: 'small',
    placeholder: '我的云文档',
    prefix: <SearchOutlined style={{color: '#007440'}} />,
    onPressEnter: () => {
      onFileSearch(value);
      setValue('');
    },
    style: {width: '100%'},
    variant: 'filled',
    value,
    onChange: (e) => setValue(e.target.value),
  } as GetProps<typeof Input>;

  // ------------------------------------------------------------------------------------------------------------------------

  return (
    <div className='file-search'>
      <Input {...inputProps} />
    </div>
  );
};

export default FileSearch;
