import Reac, { useEffect } from 'react';

import { queryBackUser } from '@/api/user';

function BackUser() {
  useEffect(() => {
    getUser();
    return () => {};
  }, []);

  const getUser = async () => {
    try {
      const data = await queryBackUser();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>backUser</div>;
}

export default BackUser;
