import React, { useMemo, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Messagelist from './components/Messagelist';
import MessagePanel, { MessagePanelInputs } from './components/MessagePanel';
import toast from '@/components/Toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { formatDate } from '@/utils/filters';

import { fetchUserMessagesById } from '@/services/queries';
import { ErrorProps, sendMessage } from '@/services/mutations';
import { useAuth } from '@/hooks/useAuth';

import * as S from './styles';

type Message = {
  _id: string;
  user_id: string;
  content: string;
  destination: string;
  sms_provider_id: string;
  sms_provider_status: string;
  sms_provider_telecom_service: string;
  sms_provider_code: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type FormattedMessage = {
  id: string;
  status: string;
  data_envio: string;
  operadora: string;
  mensagem: string;
  telefone: string;
};

const Home: React.FC = () => {
  const [messages, setMessages] = useState<FormattedMessage[]>([]);
  const { user, saveData } = useAuth();

  const query = useQuery({
    queryKey: ['getLastMessages'],
    queryFn: async (): Promise<Message[]> => fetchUserMessagesById(),
    onSuccess: (data) => {
      const newData = data.map((item: Message) => ({
        id: item._id,
        data_envio: item.createdAt,
        operadora: item.sms_provider_telecom_service,
        status: item.sms_provider_status,
        mensagem: item.content,
        telefone: item.destination,
      }));

      setMessages(newData);
    },
    refetchOnWindowFocus: false,
    refetchInterval: 5000000,
  });

  const mutation = useMutation({
    mutationFn: async (messageData: MessagePanelInputs) => sendMessage(messageData),
    onError: (error: ErrorProps) => {
      toast({
        type: 'danger',
        text: `Oops! ${error.message}`,
      });
    },
    onSuccess: (_, variables) => {
      setMessages((prev) => [
        {
          id: String(Math.round(Math.random() * 10)),
          status: 'ENVIANDO',
          data_envio: new Date().toISOString(),
          operadora: 'AGUARDE',
          mensagem: variables.content,
          telefone: variables.destination,
        },
        ...prev,
      ]);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      saveData({ ...user!, credits: user!.credits >= 1 ? user!.credits - 1 : 0 });
      toast({
        type: 'success',
        text: `Mensagem enviada com sucesso!`,
      });
    },
  });

  const defaultMessages = useMemo(
    () =>
      messages.map((msg) => ({
        ...msg,
        data_envio: formatDate(msg.data_envio),
      })),
    [messages, messages.length]
  );

  async function handleRefresh() {
    await query.refetch();
  }

  const onSubmit: SubmitHandler<MessagePanelInputs> = async (data) => {
    const { content, destination } = data;
    await mutation.mutateAsync({ content, destination });
  };

  const initialSlice = defaultMessages.length <= 6 ? defaultMessages.length : 6;

  const recentMessages =
    defaultMessages?.slice(0, initialSlice).map((item) => ({
      id: item.id,
      content: item.mensagem,
    })) || [];

  return (
    <S.Wrapper>
      <MessagePanel
        onSubmit={onSubmit}
        recentMessages={recentMessages}
        loading={mutation.isLoading}
      />
      <Messagelist messages={defaultMessages} onRefresh={handleRefresh} loading={query.isLoading} />
    </S.Wrapper>
  );
};

export default Home;
