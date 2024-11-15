import React, { useState } from 'react';
import { Button, Input, Modal, message } from 'antd';
import { FolderAddOutlined } from '@ant-design/icons';
import styles from './component.module.css'

interface FolderCreatorProps {
  onFolderCreate: (folderName: string) => void;
  className?: string;
}

const FolderCreator: React.FC<FolderCreatorProps> = ({ onFolderCreate, className }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tempFolderName, setTempFolderName] = useState('');

  const handleStartCreate = () => {
    setIsModalVisible(true);
    setTempFolderName('');
  };

  const handleOk = () => {
    if (tempFolderName.trim()) {
      onFolderCreate(tempFolderName.trim());
      setIsModalVisible(false);
      setTempFolderName('');
    } else {
      message.warning('请输入文件夹名称');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTempFolderName('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleOk();
    }
  };

  return (
    <>
      <Button
        icon={<FolderAddOutlined />}
        onClick={handleStartCreate}
        style = {{
          padding:'8px',
          border: 'none',
          fontSize:'20px',
        }}

        className= {styles.foldcreator}
      >
      </Button>
      <Modal
        title="新建文件夹"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
        destroyOnClose
      >
        <Input
          autoFocus
          placeholder="输入文件夹名称"
          value={tempFolderName}
          onChange={e => setTempFolderName(e.target.value)}
          onKeyDown={handleKeyPress}
          maxLength={50}
          showCount
        />
      </Modal>
    </>
  );
};

export default FolderCreator;