import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';

import './style.less';

function SearchForm({ search }) {
  const [form] = Form.useForm();
  return (
    <div className="search-form">
      <Form
        form={form}
        name="search-form"
        autoComplete="off"
        layout="inline"
        onFinish={(value) => search(value)}
      >
        <Row gutter={10} style={{ width: '100%' }}>
          <Col span={4}>
            <Form.Item label="账号" name="username">
              <Input placeholder="请输入账号" allowClear />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label="创建时间" name="create_time">
              <DatePicker
                placeholder="请选择创建时间"
                allowClear
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label="状态" name="used">
              <Select
                placeholder="请选择用户状态"
                allowClear
                style={{ width: '100%' }}
              >
                <Select.Option value={0}>启用</Select.Option>
                <Select.Option value={1}>停用</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label="手机号" name="phone">
              <Input placeholder="请输入手机号" allowClear />
            </Form.Item>
          </Col>

          <Col>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              style={{ marginRight: 10 }}
            >
              搜索
            </Button>
            <Button
              type="primary"
              ghost
              onClick={() => form.resetFields()}
              icon={<RedoOutlined />}
            >
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchForm;
