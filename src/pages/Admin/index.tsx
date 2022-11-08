import React from 'react';

import * as S from './styles';

const menu = [
  {
    id: 1,
    title: 'Clientes',
    url: '/clients',
  },
];

const Admin: React.FC = () => {
  return (
    <S.Wrapper>
      {menu.map((item) => (
        <S.OptionLink key={item.id} to='clients'>
          {item.title}
        </S.OptionLink>
      ))}
    </S.Wrapper>
  );
};

export default Admin;
