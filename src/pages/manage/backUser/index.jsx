import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Space } from 'antd';
import {
  EditOutlined,
  StopOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

import { queryBackUser } from '@/api/user';
import { formatUserData } from './helper';
import SearchForm from './components/SearchForm';
import EditForm from './components/EditForm';

import { stopOrStartUser } from '../../../api/user';
import { messageTip } from '../../../utils';

import './style.less';

function BackUser() {
  const [table, setTable] = useState([]);
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '最近登陆',
      dataIndex: 'last_login_time',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
    },
    {
      title: '状态',
      dataIndex: 'used',
      render: (state) =>
        state ? <Tag color="red">停用</Tag> : <Tag color="green">启用</Tag>,
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <>
          <Button
            type="primary"
            color="#f00"
            icon={<EditOutlined />}
            style={{ marginRight: 10 }}
            onClick={() => handChangeUser(record)}
          >
            编辑
          </Button>
          <Button
            danger={!record.used}
            type="primary"
            icon={!record.used ? <StopOutlined /> : <CheckCircleOutlined />}
            onClick={() => handChangeUserState(record)}
          >
            {!record.used ? '停用' : '启用'}
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    getUser();
    return () => {};
  }, []);

  // 获取用户
  const getUser = async () => {
    try {
      const { data } = await queryBackUser();
      formatUserData(data);
      setTable(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeUserState = async (id, used) => {
    try {
      const { code, message } = await stopOrStartUser(id, used);
      messageTip(code, message);
      getUser();
    } catch (error) {
      console.error(error);
    }
  };

  const handChangeUserState = (record) => {
    const { id, used } = record;
    changeUserState(id, used ? 0 : 1);
  };

  const handChangeUser = (record) => {
    setVisible(true);
  };

  const handClose = () => {
    setVisible(false);
  };

  const handSave = () => {
    setVisible(false);
  };

  return (
    <div className="back-user">
      <div className="container">
        <SearchForm key="search-form" />
        <Table
          key="user-table"
          columns={columns}
          dataSource={table}
          rowKey={(record) => record.id}
          size="middle"
        />
        <EditForm visible={visible} onClose={handClose} onSave={handSave} />
      </div>
    </div>
  );
}

export default BackUser;
