import React, { useState } from 'react';
import Messagelist from './components/Messagelist';
import MessagePanel from './components/MessagePanel';
import * as S from './styles';

const defaultMessages = [
  {
    situacao: 'OK',
    codigo: '1',
    id: '2673135144',
    data_envio: '01/11/2022 15:32:05',
    operadora: 'TIM',
    qtd_credito: '1',
    descricao: 'ERRO PAG 1',
    mensagem: 'WAKE_UP',
    telefone: '5511983798902',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '2624719108',
    data_envio: '07/10/2022 16:37:10',
    operadora: 'CTBC',
    qtd_credito: '1',
    descricao: 'ERRO PAG 1',
    mensagem: 'alo',
    telefone: '16995841456',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '2588111867',
    data_envio: '19/09/2022 15:07:44',
    operadora: 'DATORA',
    qtd_credito: '1',
    descricao: 'ERRO PAG 1',
    mensagem: 'RESET#',
    telefone: '11913954667',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '2587613420',
    data_envio: '19/09/2022 11:55:51',
    operadora: 'DATORA',
    qtd_credito: '1',
    descricao: 'ERRO PAG 1',
    mensagem: 'factoryall#',
    telefone: '5511913954667',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '2587608438',
    data_envio: '19/09/2022 11:54:05',
    operadora: 'TIM',
    qtd_credito: '1',
    descricao: 'RECEBIDA PAG 1',
    mensagem: 'teste',
    telefone: '41999013657',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '26731351414',
    data_envio: '01/11/2022 15:32:05',
    operadora: 'TIM',
    qtd_credito: '1',
    descricao: 'ERRO PAG 2',
    mensagem: 'WAKE_UP',
    telefone: '5511983798902',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '26247191028',
    data_envio: '07/10/2022 16:37:10',
    operadora: 'CTBC',
    qtd_credito: '1',
    descricao: 'ERRO PAG 2',
    mensagem: 'alo',
    telefone: '16995841456',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '25881118367',
    data_envio: '19/09/2022 15:07:44',
    operadora: 'DATORA',
    qtd_credito: '1',
    descricao: 'ERRO PAG 2',
    mensagem: 'RESET#',
    telefone: '11913954667',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '25876143420',
    data_envio: '19/09/2022 11:55:51',
    operadora: 'DATORA',
    qtd_credito: '1',
    descricao: 'ERRO PAG 2',
    mensagem: 'factoryall#',
    telefone: '5511913954667',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '25876081438',
    data_envio: '19/09/2022 11:54:05',
    operadora: 'TIM',
    qtd_credito: '1',
    descricao: 'RECEBIDA PAG 2',
    mensagem: 'teste',
    telefone: '41999013657',
  },
  {
    situacao: 'OK',
    codigo: '1',
    id: '25876081438',
    data_envio: '19/09/2022 11:54:05',
    operadora: 'TIM',
    qtd_credito: '1',
    descricao: 'RECEBIDA PAG 3',
    mensagem: 'teste',
    telefone: '41999013657',
  },
];

const Home: React.FC = () => {
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [messageListLoading, setMessageListLoading] = useState(false);

  function handleRefresh() {
    setMessageListLoading(true);

    setTimeout(() => {
      console.log('refreshed!');
      setMessageListLoading(false);
    }, 2000);
  }

  function handleSendMessage() {
    setSendMessageLoading(true);

    setTimeout(() => {
      console.log('sent!');
      setSendMessageLoading(false);
    }, 2000);
  }

  const recentMessages = defaultMessages.slice(0, 6).map((item) => ({
    id: item.id,
    content: item.mensagem,
  }));
  return (
    <S.Wrapper>
      <MessagePanel
        handleSendMessage={handleSendMessage}
        recentMessages={recentMessages}
        loading={sendMessageLoading}
      />
      <Messagelist
        loading={messageListLoading}
        messages={defaultMessages}
        handleRefresh={handleRefresh}
      />
    </S.Wrapper>
  );
};

export default Home;
