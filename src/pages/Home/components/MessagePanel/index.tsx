import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import HookFormInput from '@/components/HookFormInput';
import Button from '@/components/Button';

import { sendMessageSchema } from '@/utils/validationSchemas';
import { normalizeStr, onlyNumbers } from '@/utils/filters';
import * as S from './styles';
import HookFormTextarea from '@/components/HookFormTextarea';

type MessagePanelProps = {
  handleSendMessage: () => void;
  recentMessages: { id: string; content: string }[];
  loading: boolean;
};

type Inputs = {
  destination: string;
  content: string;
};

const MessagePanel: React.FC<MessagePanelProps> = ({
  handleSendMessage,
  recentMessages,
  loading = false,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    // watch,
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      destination: '',
      content: '',
      // search: '',
    },
    resolver: yupResolver(sendMessageSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <S.Wrapper>
      <S.Container>
        <S.PanelHeader>
          <h2>Painel de envio</h2>
          <Button size='sm' id='command' lefticon='command' disabled>
            Criar comando
          </Button>
        </S.PanelHeader>
        <S.Form onSubmit={handleSubmit(handleSendMessage)}>
          <HookFormInput
            label='Destino'
            name='destination'
            id='destination'
            placeholder='(55) 9 9898-9898'
            lefticon='simcard'
            control={control}
            errors={errors}
            autoComplete='new-password'
            loading={loading}
            transform={{
              input: (value: string) => value,
              output: (e: React.BaseSyntheticEvent) => onlyNumbers(e.target.value),
            }}
          />

          <HookFormTextarea
            label='Mensagem'
            name='content'
            maxLength={160}
            rows={10}
            placeholder='Insira sua mensagem. Tamanho máximo de 160 caracteres.'
            control={control}
            errors={errors}
            loading={loading}
            transform={{
              input: (value: string) => value,
              output: (e: React.BaseSyntheticEvent) => normalizeStr(e.target.value),
            }}
          />
          <Button loading={loading} error={Object.keys(errors).length > 0} type='submit'>
            Enviar
          </Button>
        </S.Form>
      </S.Container>
      <S.Container>
        <S.PanelHeader>
          <h2>Mensagens recentes</h2>
        </S.PanelHeader>
        <S.CommandsContainer>
          {recentMessages.map((command) => (
            <Button
              key={command.id}
              size='sm'
              lefticon='command'
              id='command'
              onClick={() => setValue('content', `${command.content}`)}
            >
              {command.content}
            </Button>
          ))}
        </S.CommandsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default MessagePanel;
