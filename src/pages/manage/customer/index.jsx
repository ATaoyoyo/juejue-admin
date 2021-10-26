import React, { useState, useEffect } from 'react';
import { Table, Form, Input, Button } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';

import './style.less';
import { queryUser } from '../../../api/customer';
import { formatDays } from '../../../utils';

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
    title: '个新签名',
    dataIndex: 'signature',
  },
  {
    title: '最近登陆',
    dataIndex: 'last_login_time',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
  },
];

function Customer() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [username, setUsername] = useState('');
  const [pageOption, setPageOption] = useState({ page: 1, size: 10 });

  const [form] = Form.useForm();

  useEffect(() => {
    getUser();
    return () => {};
  }, [pageOption]);

  const pageSetting = {
    total,
    position: ['bottomCenter'],
    size: 'default',
    onChange: (page, size) => handPageChange(page, size),
  };

  const getUser = async () => {
    try {
      const { page, size } = pageOption;
      const { data } = await queryUser({
        username: form.getFieldValue('username'),
        page,
        size,
      });
      const { result, total } = data;
      result.forEach((item) => {
        const { last_login_time, create_time } = item;
        item.create_time = formatDays(create_time);
        item.last_login_time = formatDays(last_login_time);
      });
      setData(result);
      setTotal(total);
    } catch (error) {
      console.log(error);
    }
  };

  const handPageChange = (page, size) => {
    setPageOption({ page, size });
  };

  const handReset = () => {
    form.resetFields();
    getUser();
  };

  return (
    <div className="customer">
      <div className="container">
        <Form
          form={form}
          layout="inline"
          style={{ marginBottom: 10 }}
          onFinish={getUser}
        >
          <Form.Item label="用户名" name="username">
            <Input placeholder="请输入用户名" allowClear />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              icon={<SearchOutlined />}
              htmlType="submit"
            >
              搜索
            </Button>
            <Button
              type="primary"
              ghost
              icon={<RedoOutlined />}
              onClick={handReset}
            >
              重置
            </Button>
          </Form.Item>
        </Form>
        <Table
          key="customer-user"
          dataSource={data}
          columns={columns}
          rowKey={(record) => record.id}
          size="middle"
          pagination={pageSetting}
        />
      </div>
    </div>
  );
}

export default Customer;
