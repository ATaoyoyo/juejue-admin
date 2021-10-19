import React from 'react';
import { Button } from 'antd';

import RightHeader from '@/components/RightHeader';

export function getInitialState() {
  return {
    name: 'Serati Ma',
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  };
}

export const layout = {
  rightRender: () => {
    return <RightHeader />;
  },
};
