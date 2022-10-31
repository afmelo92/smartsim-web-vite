import React from 'react';
import Messagelist from './components/Messagelist';
import MessagePanel from './components/MessagePanel';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <MessagePanel />
      <Messagelist />
    </S.Wrapper>
  );
};

export default Home;
