import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

import './style.less';

function SearchForm() {
  return (
    <div className="search-form">
      <Form name="search-form" autoComplete="off" layout="inline">
        <Row gutter={10} style={{ width: '100%' }}>
          <Col span={6}>
            <Form.Item label="用户名">
              <Input placeholder="请输入用户名" allowClear />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="创建时间">
              <DatePicker
                placeholder="请选择创建时间"
                allowClear
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="状态">
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

          <Col span={6}>
            <Button type="primary" icon={<SearchOutlined />}>
              搜索
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchForm;
