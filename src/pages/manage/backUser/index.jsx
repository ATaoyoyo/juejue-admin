import React, { useEffect, useState } from 'react';
import { Table, Tag, Button, Space } from 'antd';
import {
  EditOutlined,
  StopOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

import { queryBackUser } from '@/api/user';
import SearchForm from './components/SearchForm';

import './style.less';

function BackUser() {
  const [table, setTable] = useState([]);

  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '最近登陆',
      dataIndex: 'last_login_time',
      key: 'last_login_time',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '状态',
      dataIndex: 'is_delete',
      key: 'is_delete',
      render: (state) =>
        state ? (
          <Tag color="red" key={state}>
            停用
          </Tag>
        ) : (
          <Tag color="green" key={state}>
            启用
          </Tag>
        ),
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button
            type="primary"
            color="#f00"
            icon={<EditOutlined />}
            style={{ marginRight: 10 }}
          >
            编辑
          </Button>
          <Button
            danger={!record.is_delete}
            type="primary"
            icon={
              !record.is_delete ? <StopOutlined /> : <CheckCircleOutlined />
            }
          >
            {!record.is_delete ? '停用' : '启用'}
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    getUser();
    return () => {};
  }, []);

  const getUser = async () => {
    try {
      const { data } = await queryBackUser();
      console.log(data);
      data.forEach((item) => {
        item.create_time = dayjs(item.create_time).format(
          'YYYY-MM-DD HH:mm:ss',
        );
        item.last_login_time = dayjs(item.last_login_time).format(
          'YYYY-MM-DD HH:mm:ss',
        );
      });
      setTable(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="back-user">
      <div className="container">
        <SearchForm />
        <Table columns={columns} dataSource={table} size="middle" />
      </div>
    </div>
  );
}

export default BackUser;
