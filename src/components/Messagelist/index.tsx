import React from 'react';
import Button from '../Button';

import * as S from './styles';

const Messagelist: React.FC = () => {
  return (
    <S.Wrapper>
      <S.MessagesHeader>
        <h2>Mensagens enviadas</h2>
        <Button size='sm' lefticon='refresh' id='refresh'>
          Recarregar
        </Button>
      </S.MessagesHeader>

      <S.MessagesContainer>
        <S.MessageBox>
          <S.MessageHeader>
            <strong>Data/hora</strong>
            <strong>Status</strong>
            <strong>Operadora</strong>
            <strong>Mensagem</strong>
            <strong>Destino</strong>
          </S.MessageHeader>
          <S.MessageData>
            <p>07/10/2022 16:37:10</p>
            <p>RECEBIDA</p>
            <p>Claro</p>
            <p>#APN,888888,voxter.br,claro,claro#</p>
            <p>5541999013657</p>
          </S.MessageData>
        </S.MessageBox>
        <S.MessageBox>
          <S.MessageHeader>
            <strong>Data/hora</strong>
            <strong>Status</strong>
            <strong>Operadora</strong>
            <strong>Mensagem</strong>
            <strong>Destino</strong>
          </S.MessageHeader>
          <S.MessageData>
            <p>07/10/2022 16:37:10</p>
            <p>RECEBIDA</p>
            <p>Claro</p>
            <p>#APN,888888,voxter.br,claro,claro#</p>
            <p>5541999013657</p>
          </S.MessageData>
        </S.MessageBox>
        <S.MessageBox>
          <S.MessageHeader>
            <strong>Data/hora</strong>
            <strong>Status</strong>
            <strong>Operadora</strong>
            <strong>Mensagem</strong>
            <strong>Destino</strong>
          </S.MessageHeader>
          <S.MessageData>
            <p>07/10/2022 16:37:10</p>
            <p>RECEBIDA</p>
            <p>Claro</p>
            <p>#APN,888888,voxter.br,claro,claro#</p>
            <p>5541999013657</p>
          </S.MessageData>
        </S.MessageBox>
      </S.MessagesContainer>
    </S.Wrapper>
  );
};

export default Messagelist;
