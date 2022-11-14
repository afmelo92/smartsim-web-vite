import React, { useMemo, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Messagelist from './components/Messagelist';
import MessagePanel, { MessagePanelInputs } from './components/MessagePanel';
import toast from '@/components/Toast';

import * as S from './styles';

const Home: React.FC = () => {
  const [sendMessageLoading, setSendMessageLoading] = useState(false);
  const [messageListLoading, setMessageListLoading] = useState(false);
  const [messages, setMessages] = useState(() => [
    {
      situacao: 'OK',
      codigo: '1',
      id: '111',
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
      id: '2222',
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
      id: '3333',
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
      id: '4444',
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
      id: '5555',
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
      id: '6666',
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
      id: '7777',
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
      id: '8888',
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
      id: '9999',
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
      id: '10123',
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
      id: '11123',
      data_envio: '19/09/2022 11:54:05',
      operadora: 'TIM',
      qtd_credito: '1',
      descricao: 'RECEBIDA PAG 3',
      mensagem: 'teste',
      telefone: '41999013657',
    },
  ]);

  const defaultMessages = useMemo(() => messages, [messages, messages.length]);

  function handleRefresh() {
    setMessageListLoading(true);

    setTimeout(() => {
      console.log('refreshed!');
      setMessageListLoading(false);
      toast({
        type: 'success',
        text: 'Mensagens carregadas com sucesso!',
      });
    }, 2000);
  }

  const handleSendMessage: SubmitHandler<MessagePanelInputs> = (data, e) => {
    setSendMessageLoading(true);
    console.log(data, e);
    setTimeout(() => {
      console.log('sent!');
      setSendMessageLoading(false);
      setMessages((prev) => [
        {
          situacao: 'ENVIANDO',
          codigo: 'AGUARDE',
          id: String(Math.round(Math.random() * 10)),
          data_envio: '01/11/2022 15:32:05',
          operadora: 'AGUARDE',
          qtd_credito: '1',
          descricao: 'ENVIANDO',
          mensagem: data.content,
          telefone: data.destination,
        },
        ...prev,
      ]);
      toast({
        type: 'success',
        text: 'Mensagem enviada com sucesso!',
      });
    }, 2000);
  };

  const recentMessages = defaultMessages.slice(0, 6).map((item) => ({
    id: item.id,
    content: item.mensagem,
  }));

  return (
    <S.Wrapper>
      <MessagePanel
        onSubmit={handleSendMessage}
        recentMessages={recentMessages}
        loading={sendMessageLoading}
      />
      <Messagelist
        messages={defaultMessages}
        onRefresh={handleRefresh}
        loading={messageListLoading}
      />
    </S.Wrapper>
  );
};

export default Home;
