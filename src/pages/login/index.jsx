import React from 'react';
import { useHistory } from 'umi';
import { Card, Form, Input, Button, message } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  BorderVerticleOutlined,
} from '@ant-design/icons';

import './style.less';
import { login } from '@/api/user';

function Login() {
  const history = useHistory();

  const onFinish = async (values) => {
    const { username, password } = values;
    const { code, data, message: msg } = await login(username, password);
    console.log(data);
    if (code === 200) {
      message.success('登陆成功！');
      localStorage.setItem('TOKEN', data);
      history.push('/dashboard');
    } else {
      message.error(msg);
    }
  };

  return (
    <Card
      title="记个帐吧管理系统"
      style={{ width: 450 }}
      className="login-form"
    >
      <Form name="login_form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="请输入用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>
        {/* <Form.Item
          name="verificationCode"
          rules={[
            {
              required: true,
              message: '请输入验证码!',
            },
          ]}
        >
          <Input
            prefix={<BorderVerticleOutlined className="site-form-item-icon" />}
            placeholder="请输入验证码"
          />
        </Form.Item> */}
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登 陆
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;
