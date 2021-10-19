import React from 'react';
import { useHistory } from 'umi';
import { Menu, Dropdown, message } from 'antd';
import {
  SmileOutlined,
  SettingFilled,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';

let history;

const menus = (
  <Menu onClick={(e) => handClick(e)}>
    <Menu.Item key="mine" icon={<SmileOutlined />}>
      个人中心
    </Menu.Item>
    <Menu.Item key="setting" icon={<SettingFilled />}>
      个人设置
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logut" icon={<LogoutOutlined />}>
      退出登陆
    </Menu.Item>
  </Menu>
);

const handClick = ({ key }: { key: string }) => {
  if (key === 'mine' || key === 'setting') {
    message.warning('建设中...');
  } else {
    history.push('/login');
  }
};

function RightHeader() {
  history = useHistory();
  return (
    <Dropdown overlay={menus}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <UserOutlined />
        ATAOYOYO
      </a>
    </Dropdown>
  );
}

export default RightHeader;
