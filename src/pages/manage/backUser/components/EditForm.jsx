import React from 'react';
import { Drawer, Space, Form, Button, Input, Row, Col, Select } from 'antd';

function EditForm(props) {
  const { visible, detail, onClose, onSave } = props;

  const layout = {
    labelCol: { span: 5 },
    // wrapperCol: { span: 18 },
  };

  return (
    <div className="edit-form">
      <Drawer
        title="编辑用户信息"
        visible={visible}
        width={400}
        bodyStyle={{ paddingBottom: 80 }}
        onClose={onClose}
      >
        <Form
          requiredMark
          layout="vertical"
          onFinish={(value) => onSave(value)}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入用户名" allowClear />
          </Form.Item>

          <Form.Item label="状态" name="used" rules={[{ required: true }]}>
            <Select
              placeholder="请选择用户状态"
              style={{ width: '100%' }}
              allowClear
            >
              <Select.Option value={0}>启用</Select.Option>
              <Select.Option value={1}>停用</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true }]}>
            <Input placeholder="请输入用户密码" type="password" allowClear />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="password2"
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入确认密码" type="password" allowClear />
          </Form.Item>

          <Form.Item>
            <p style={{ textAlign: 'right' }}>
              <Button onClick={onClose} style={{ marginRight: 10 }}>
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </p>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default EditForm;
