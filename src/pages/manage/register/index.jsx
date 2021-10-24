import React from 'react';
import { Form, Input, Select, Button, message } from 'antd';

import { registerUser } from '../../../api/user';
import './style.less';
import { messageTip } from '../../../utils';

function Register() {
  const [form] = Form.useForm();

  const labelCol = { span: 4 };

  const register = async (params) => {
    try {
      const { code, message } = await registerUser(params);
      messageTip(code, message);
      code === 200 && handReset();
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = (params) => {
    if (params.password1 !== params.password2) {
      return message.warning('两次密码不一致');
    }
    register(Object.assign(params, { password: params.password1 }));
  };

  const handReset = () => {
    form.resetFields();
  };

  return (
    <div className="register">
      <div className="container">
        <div className="form">
          <Form
            form={form}
            labelCol={labelCol}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入账号" allowClear />
            </Form.Item>

            <Form.Item
              label="昵称"
              name="nickname"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入昵称" allowClear />
            </Form.Item>

            <Form.Item label="手机" name="phone">
              <Input placeholder="请输入手机号" allowClear />
            </Form.Item>

            <Form.Item label="状态" name="used" rules={[{ required: true }]}>
              <Select placeholder="请选择状态">
                <Select.Option value={0}>启用</Select.Option>
                <Select.Option value={1}>停用</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="密码"
              name="password1"
              rules={[{ required: true }]}
            >
              <Input.Password type="password" placeholder="请输入密码" />
            </Form.Item>

            <Form.Item
              label="确认密码"
              name="password2"
              rules={[{ required: true }]}
            >
              <Input.Password type="password" placeholder="请输入确认密码" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: 10 }}
              >
                创建
              </Button>
              <Button type="dashed" onClick={handReset}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
