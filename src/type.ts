// ------------------------------------------------------------------------------------------------------------------------

// 搜索框组件
export interface FileSearchProps {
  onFileSearch: (val: string) => void;
}

export interface FileProps {
  id: string;
  title: string;
  body?: string;
  createdAt: number;
}

export interface FileListProps {
  files: FileProps[];
  onFileClick?: (id: string) => void;
  onFileDelete?: (id: string) => void;
  onSaveEdit?: (id: string, value: string) => void;
}
