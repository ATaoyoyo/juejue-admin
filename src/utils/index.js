import dayjs from 'dayjs';
import { message } from 'antd';

export function formatDays(time, type = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(time).format(type);
}

export function messageTip(code, msg) {
  code === 200 ? message.success(msg) : message.error(msg);
}
