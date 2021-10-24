import React, { useEffect, useState } from 'react';
import { Table, Tag, Button } from 'antd';
import {
  EditOutlined,
  StopOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import SearchForm from './components/SearchForm';
import EditForm from './components/EditForm';
import { formatUserData } from './helper';

import { queryBackUser, stopOrStartUser, updateUser } from '../../../api/user';
import { messageTip } from '../../../utils';

import './style.less';

function BackUser() {
  const [table, setTable] = useState([]);
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({});

  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
    },
    {
      title: '账号',
      dataIndex: 'username',
    },
    {
      title: '用户名',
      dataIndex: 'nickname',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
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
            icon={!record.used ? <StopOutlined /> : <CheckCircleOutlined />}
            style={{ marginRight: 10 }}
            className={
              record.used ? 'button-color-green' : 'button-color-sunset'
            }
            onClick={() => handChangeUserState(record)}
          >
            {!record.used ? '停用' : '启用'}
          </Button>
          <Button danger icon={<DeleteOutlined />}>
            删除
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
  const getUser = async (params) => {
    try {
      const { data } = await queryBackUser(params);
      formatUserData(data);
      setTable(data);
    } catch (error) {
      console.log(error);
    }
  };

  // 改变用户状态
  const changeUserState = async (id, used) => {
    try {
      const { code, message } = await stopOrStartUser(id, used);
      messageTip(code, message);
      getUser();
    } catch (error) {
      console.error(error);
    }
  };

  // 编辑用户
  const updateUserInfo = async (params) => {
    try {
      const { code, message } = await updateUser(params);
      messageTip(code, message);
      getUser();
      code === 200 && setVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handChangeUserState = (record) => {
    const { id, used } = record;
    changeUserState(id, used ? 0 : 1);
  };

  // 编辑用户
  const handChangeUser = (record) => {
    setVisible(true);
    setDetail(record);
  };

  const handClose = () => {
    setVisible(false);
  };

  const handSave = (value) => {
    updateUserInfo(value);
    setVisible(false);
  };

  const handSearch = (value) => {
    console.log(value);
    getUser(value);
  };

  return (
    <div className="back-user">
      <div className="container">
        <SearchForm key="search-form" search={handSearch} />
        <Table
          key="user-table"
          columns={columns}
          dataSource={table}
          rowKey={(record) => record.id}
          size="middle"
        />
        <EditForm
          detail={detail}
          visible={visible}
          onClose={() => handClose()}
          onSave={handSave}
        />
      </div>
    </div>
  );
}

export default BackUser;
