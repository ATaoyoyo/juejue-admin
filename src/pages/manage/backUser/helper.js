import { formatDays } from '../../../utils';

export const formatUserData = (data) => {
  data.forEach((item) => {
    item.create_time = formatDays(item.create_time);
    item.last_login_time = formatDays(item.last_login_time);
  });
};
