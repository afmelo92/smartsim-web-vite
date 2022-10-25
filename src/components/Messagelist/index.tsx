import React from 'react';

import * as S from './styles';

const Messagelist: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MessagesHeader>
          <h2>Mensagens enviadas</h2>
          <button type='submit'>Recarregar</button>
        </S.MessagesHeader>

        <S.MessagesContainer>
          <S.MessageBox>
            <div id='message-info'>
              <p>Data/hora</p>
              <p>Status</p>
              <p>Operadora</p>
              <p>Mensagem</p>
              <p>Destino</p>
            </div>
            <div id='message-data'>
              <p>07/10/2022 16:37:10</p>
              <p>RECEBIDA</p>
              <p>Claro</p>
              <p>#APN,888888,voxter.br,claro,claro#</p>
              <p>5541999013657</p>
            </div>
          </S.MessageBox>
          <S.MessageBox>
            <div id='message-info'>
              <p>Data/hora</p>
              <p>Status</p>
              <p>Operadora</p>
              <p>Mensagem</p>
              <p>Destino</p>
            </div>
            <div id='message-data'>
              <p>07/10/2022 16:37:10</p>
              <p>RECEBIDA</p>
              <p>Claro</p>
              <p>#APN,888888,voxter.br,claro,claro#</p>
              <p>5541999013657</p>
            </div>
          </S.MessageBox>
          <S.MessageBox>
            <div id='message-info'>
              <p>Data/hora</p>
              <p>Status</p>
              <p>Operadora</p>
              <p>Mensagem</p>
              <p>Destino</p>
            </div>
            <div id='message-data'>
              <p>07/10/2022 16:37:10</p>
              <p>RECEBIDA</p>
              <p>Claro</p>
              <p>#APN,888888,voxter.br,claro,claro#</p>
              <p>5541999013657</p>
            </div>
          </S.MessageBox>
        </S.MessagesContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Messagelist;
