import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const App: React.FC<Props> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default App;
