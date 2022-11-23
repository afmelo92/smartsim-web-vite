import React, { useMemo } from 'react';
import config from '@/config';
import { useLocation } from 'react-router-dom';

import * as S from './styles';

const Admin: React.FC = () => {
  const location = useLocation();

  const menu = useMemo(() => {
    const currentPath = config.menu.find((item) => item.url === location.pathname);
    return currentPath?.submenu
      ?.map((item) => {
        if (item.url.includes('clients')) {
          return item;
        }
        return null;
      })
      .filter((item) => Boolean(item));
  }, []);

  return (
    <S.Wrapper>
      {menu &&
        menu.map((item) => (
          <S.OptionLink key={item?.id} to='clients'>
            {item?.title}
          </S.OptionLink>
        ))}
    </S.Wrapper>
  );
};

export default Admin;
